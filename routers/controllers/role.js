const roleModel = require("./../../db/models/role");

const createRole = (req, res) => {
  const newRole = new roleModel(req.body);
  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};





module.exports = {
  createRole,
};
