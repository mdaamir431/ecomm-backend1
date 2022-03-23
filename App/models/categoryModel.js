// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({ 
//  userId:{type:mongoose.Types.ObjectId, ref: "users" },
//  categoryName:{type:String, trim:true},
//  isDeleted:{type:Boolean, default:false},
//  isEnabled:{type:Boolean, default:true},
// },{timestamps:true},{collection:"categoryData"});

// module.exports = mongoose.model("categoryData",categorySchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "users"},
    categoryName: { type: String, trim: true },
    isDeleted: { type: Boolean, default: false },
    isEnabled: { type: Boolean, default: true }
}, { timestamps: true }, { collection: "categoryData" });

module.exports = mongoose.model("categoryData", categorySchema);