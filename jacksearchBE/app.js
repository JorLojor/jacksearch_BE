const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

// 🔧 Setup Morgan logger
const logDirectory = path.join(__dirname, "logs");

// Bikin folder logs kalau belum ada
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Buat stream log ke file access.log
const accessLogStream = fs.createWriteStream(path.join(logDirectory, "access.log"), {
    flags: "a", // 'a' = append, biar gak overwrite file lama
});

// Gunakan format 'combined' untuk log yang lengkap (IP, method, status, waktu, dll)
app.use(morgan("combined", { stream: accessLogStream }));

// Gunakan format 'dev' juga untuk tampil di console (warna-warni)
app.use(morgan("dev"));

// 🔐 Middleware umum
app.use(cors());
app.use(express.json());

// 🔌 Koneksi database
connectDB();

// 🔗 Routers
const modeRoutes = require("./routers/mode-routes");
app.use("/api/modes", modeRoutes);

// 🩺 Health check endpoint (buat cek container dari Traefik / Docker)
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Jacksearch backend is healthy 🚀" });
});

// 🏠 Root endpoint
app.get("/", (req, res) => {
    res.send("malem minggu ngoding wkwkwkwkwkwkwkwk 🤙");
});

module.exports = app;
