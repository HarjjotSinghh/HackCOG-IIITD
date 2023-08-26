const express = require('express');
const userRouter = express.Router();
const {
    fetchUser, addUser, tryUser
} = require("../controllers/userController");
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false });

userRouter.post("/fetchUser", urlencodedParser, fetchUser);
userRouter.post("/addUser", urlencodedParser , addUser);
userRouter.get("/tryUser", tryUser);


module.exports = userRouter;