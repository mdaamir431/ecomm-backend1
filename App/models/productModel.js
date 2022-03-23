const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
categoryId:{type:mongoose.Types.ObjectId,ref:"categorydatas"},
productsName:{type:String, trim:true},
isDeleted:{type:Boolean, default:false},
isEnabled:{type:Boolean, default:true},
},{timestamps:true},{collection:"productsData"});

module.exports = mongoose.model("productsData",productSchema);