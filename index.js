const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.send("welcome to server-1");
})

app.listen(8000, () => {
    console.log("server is running on port 8000");
})