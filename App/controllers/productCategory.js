const mongoose = require('mongoose');
const productModel = require('../models/productModel');
const { body } = require('express-validator');
// 1. create product
const addProduct = async(req, res) => {
    body("categoryId").exists();
    body("productsName").exists();
    let dt = req.body;
    let postData = {
        categoryId:dt.categoryId,
        productsName: dt.productsName,
    };
    var data = await productModel(postData).save();
    if (data) {
        console.log("saved", data);
        res.status(200).json({ status: 200, message: "product created successfully", data });
    } else {
        res.status(202).json({ status: 200, message: "some problem saving category" })
    }
};

// 2. get product
const getProduct = (req, res) => {
    var categoryId = req.body.categoryId;
    productModel
      .find({ categoryId: mongoose.Types.ObjectId(categoryId), isDeleted: false })
      .lean()
      .exec((err, data) => {
        if (err) {
          throw err;
        } else {
          if (data.length) {
            res.status(200).json({ status: 200, message: "Getting products Data", data });
          } else {
            res.status(202).json({ status: 202, message: "No products Data" });
          }
        }
      });
  };
module.exports = {
   addProduct,
   getProduct,
}
