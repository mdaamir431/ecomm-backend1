const express = require('express');
const router = express.Router({caseSensitive:true});
const userController = require("../App/controllers/userController");

router.post("/signup",userController.addUser);
router.post("/login",userController.authUser);
module.exports = router;
