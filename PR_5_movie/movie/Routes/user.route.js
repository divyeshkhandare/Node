const {
  getUser,
  createUser,
  loginUser,
  deleteUser,
} = require("../controllers/user.controller");

const { Router } = require("express");
const UserRouter = Router();

UserRouter.get("/", getUser);
UserRouter.post("/signup", createUser);
UserRouter.post("/login", loginUser);
UserRouter.delete("/delete/:id", deleteUser);

module.exports = UserRouter;
