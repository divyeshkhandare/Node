const dbconnect = require("./Components/db");
const User = require("./Components/user.model");
const express = require("express");
const cors = require("cors");
const isValid = require("./Components/validation");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/task", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.get("/task/:id", async (req, res) => {
  let { id } = req.params;
  let data = await User.findById(id);
  res.send(data);
});

app.post("/task", isValid, async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
});

app.patch("/task/:id", async (req, res) => {
  let { id } = req.params;
  const data = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(data);
});

app.delete("/task/:id", async (req, res) => {
  let { id } = req.params;
  const data = await User.findByIdAndDelete(id);
  res.send(data);
});

app.listen(6091, () => {
  dbconnect();
  console.log("Server running on port 6091");
});
