const mongoose = require("mongoose");
const User = require("../Models/user.schema");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    
    const user = await User.create(req.body);
    res.status(201).send(user);

  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    let isExists = await User.findOne({ username: username , password: password });
    if (!isExists) {
      return res.status(401).send({error: "Invalid username or password"});
    }
    return res.send({message:"Logged in successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { getUser, createUser, deleteUser, loginUser };
