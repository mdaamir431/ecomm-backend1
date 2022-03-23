const express = require('express');
const router = express.Router({caseSensitive:true});
const categoryController = require('../App/controllers/categoryController');

router.post("/add",categoryController.addCategory);
router.get("/get",categoryController.getCategory);
module.exports = router;