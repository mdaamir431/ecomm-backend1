const express = require('express');
const router = express.Router({caseSensitive:true});
const categoryController = require('../App/controllers/categoryController');

router.post("/category",categoryController.addCategory);
router.get("/category",categoryController.getCategory);
module.exports = router;