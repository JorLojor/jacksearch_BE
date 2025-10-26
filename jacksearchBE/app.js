const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();


const logDirectory = path.join(__dirname, "logs");


if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}


const accessLogStream = fs.createWriteStream(path.join(logDirectory, "access.log"), {
    flags: "a",
});


app.use(morgan("combined", { stream: accessLogStream }));


app.use(morgan("dev"));


app.use(cors());
app.use(express.json());


connectDB();


const modeRoutes = require("./routers/mode-routes");
app.use("/api/modes", modeRoutes);

const requestRoutes = require("./routers/request-routes")
app.use("/api/request",)


app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "aman anjoy breee " });
});


app.get("/", (req, res) => {
    res.send("malem minggu ngoding wkwkwkwkwkwkwkwk 🤙");
});

module.exports = app;
