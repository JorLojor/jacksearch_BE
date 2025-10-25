const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5434;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`API running on: http://${HOST}:${PORT}`);
});
