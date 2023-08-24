const express = require('express');
const router = express.Router();
const {
    fetchUser
} = require("../controllers/userController");


router.post("/fetchUser", fetchUser);

module.exports = router;