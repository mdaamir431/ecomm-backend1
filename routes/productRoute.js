const express = require('express');
const router = express.Router({caseSensitive:true});
const productCategory = require('../App/controllers/productCategory');

router.post("/product",productCategory.addProduct);
router.get("/product",productCategory.getProduct);

module.exports = router;