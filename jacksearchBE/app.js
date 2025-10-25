const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");

const app = express();

app.use(cors())

connectDB();


// routers
const modeRoutes = require("./routers/mode-routes");
app.use("/api/modes", modeRoutes);

app.get('/', (req, res) => {
    res.send('malem minggu ngoding wkwkwkwkkwkwkwkwk')
})

module.exports = app;
