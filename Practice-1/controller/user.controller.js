const mongoose = require("mongoose");
const USER = require("../model/user.model");

const getUser = async (req, res) => {
  if (req.file) {
    req.body.img = `uploads/${req.file.filename}`;
  }
  try {
    let user = USER.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    let isExists = await USER.findOne({ email: email });
    if (isExists) {
      return res.send("users already Exists");
    } else {
      let user = await USER.create(req.body);
      return res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let isExists = await USER.findOne({ email: email });
    if (!isExists) {
      return res.send("user not found");
    }
    if (isExists.password != password) {
      return res.send("invalid password");
    }

    res.cookie("username", isExists.username);
    res.cookie("email", isExists.email);
    res.cookie("img", isExists.img);
    res.cookie("userId", isExists.id);
    return res.send("logged in");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const SignUpPage = async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const LoginPage = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { getUser, createUser, Login, LoginPage, SignUpPage };
