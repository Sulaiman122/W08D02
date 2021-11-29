const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const SALT = Number(process.env.SALT);
  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, SALT);
  const newUser = new userModel({
    email: savedEmail,
    password: hashedPassword,
    role
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



module.exports = { register };