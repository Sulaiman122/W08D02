const userModel = require("./../../db/models/user");

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const newUser = new userModel({
    email,
    password,
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