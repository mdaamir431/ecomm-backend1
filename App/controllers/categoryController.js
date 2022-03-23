const { body } = require('express-validator');
var mongoose = require('mongoose');
var categoryModel = require('../models/categoryModel');

// 1. create category
const addCategory = async(req, res) => {
    body("categoryName").exists();
    const {categoryName} = req.body;
    if(!categoryName ){
      res.status(400).send({status:400, message:"All fields are required?"})
  }
    let postData = {
        categoryName: req.body.categoryName,
    };
    var data = await categoryModel(postData).save();
    if (data) {
        console.log("saved", data);
        res.status(200).json({ status: 200, message: "category created", data });
    } else {
        res.status(202).json({ status: 200, message: "some problem saving category" })
    }
};

// const addCategory = async(req,res)=>{
//     body("userId").exists();
//     body("categoryName").exists();
   
//    const {categoryName}=req.body;
//     try{
//        let categoryFind = await categoryModel.findOne({$or:[{categoryName}]});
//        if(categoryFind){
//                 res.status(200).send({status:200, message:"category is already exists"});
//        }else{
//         let pl = {
//             userId:req.body.userId,
//             category_Name:req.body.categoryName,
//         }
//              let cateData = await categoryModel(pl).save();
//              if(cateData){
//                  res.status(200).send({status:200, message:"category created successfully",cateData});
//              }else{
//                  res.status(202).send({status:202,message:"some problem"});
//              }
//        }
//     }catch(error){
//         return res.status(400).send({status:400, message:"something went wrong?"});
//     }
// }

// 2. Get Category
const getCategory = (req, res) => {
    categoryModel
      .find({ isDeleted: false })
      .lean()
      .exec((err, data) => {
        if (err) {
          throw err;
        } else {
          if (data.length) {
            res.status(200).json({ status: 200, message: "Getting category Data", data });
          } else {
            res.status(202).json({ status: 202, message: "No category Data" });
          }
        }
      });
  };
module.exports = {
     addCategory,
     getCategory,
}