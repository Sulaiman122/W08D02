const express = require("express");
const { createRole, roles } = require("./../controllers/role");

const roleRouter = express.Router();


roleRouter.post("/createrole", createRole);


module.exports = roleRouter;