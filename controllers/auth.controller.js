const UserModel = require("../models/User.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = await UserModel.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("Login user");
};

module.exports = {
  register,
  login,
};
