const express = require("express");
const app = express();
const port = 5200;

app.get("/", (req, res) => {
    res.status(200).send("Welcome, Home Page (from 1_vol_2)");
});

app.get("/about", (req, res) => {
    res.status(200).send("Welcome, About Page (from 1_vol_2)");
});

app.listen(port, () => {
    console.log(`Server running on port number ${port}`);
});