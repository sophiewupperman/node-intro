const express = require("express");

const app = express();

let i = 0;

app.get("/", (req, res) => {
  res.send(`Hello world ${i++}`);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("server ready");
});
