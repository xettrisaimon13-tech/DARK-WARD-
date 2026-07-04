const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Dark Ward Server Running");
});

app.listen(PORT, () => {
    console.log("Server Running on", PORT);
});
