const express = require("express");
const app = express();
const port = 5200;

app.get('/', (req, res) => {
    res.status(200).send("Welcome, Home Page");
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome, About Page");
});

app.listen(port, () =>{
    console.log(`Server is running on port number ${port}`);
})