const express = require('express')
const  {register ,login} = require('./../controllers/user')
const userRouter = express.Router()


userRouter.post("/register", register);


module.exports = userRouter;