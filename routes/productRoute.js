const express = require('express');
const router = express.Router({caseSensitive:true});
const productCategory = require('../App/controllers/productCategory');

router.post("/add",productCategory.addProduct);
router.get("/get",productCategory.getProduct);

module.exports = router;