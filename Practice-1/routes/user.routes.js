const { Router } = require("express");
const {
  SignUpPage,
  LoginPage,
  getUser,
  createUser,
  Login,
} = require("../controller/user.controller");
const upload = require("../utils/imageuploder");

const UserRouter = Router();

UserRouter.get("/", getUser);
UserRouter.get("/register", SignUpPage);
UserRouter.get("/login", LoginPage);
UserRouter.post("/",upload.single("img"), createUser);
UserRouter.post("/login", Login);

module.exports = UserRouter;