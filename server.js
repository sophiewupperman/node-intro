const express = require("express");
const uid = require("uid");

const app = express();
app.use(express.json());
app.use(express.static("./dist"));

const users = [
  { name: "Joe", role: "mechanic", id: uid() },
  { name: "Dr. Who", role: "time traveller", id: uid() },
  { name: "Jan", role: "assistant coach", id: uid() },
  { name: "Jerry", role: "head coach", id: uid() },
  { name: "Christian", role: "head coach", id: uid() }
];

app.get("/users", (req, res) => {
  res.json(users); //wandelt in eine json Datei um sendet diese
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find(user => user.id === Number(id)));
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server is ready");
});

app.post("/users", (req, res) => {
  const user = { ...req.body, id: uid() };
  users.push(user);
  res.json(user);
});
