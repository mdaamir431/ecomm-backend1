var mongoose = require('mongoose');
const {compare} = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs/dist/bcrypt');

// Create user
const addUser = async(req,res)=>{
    body("first_Name").exists();
    body("last_Name").exists();
    body("email").exists();
    body("userType").exists();
    body("addrress").exists();
    body("password").exists();

    const {first_Name,last_Name,email,password,userType,address,} = req.body;
   if(!first_Name || !last_Name || !email || !password || !userType || !address){
       res.status(400).send({status:400, message:"All fields are required?"})
   }
   try{
      let oldUser = await userModel.findOne({$or:[{email}]});
      if(oldUser){
         return res.status(200).send({status:200,message:"you have already an account",})
      }else{
        let dt =req.body;
        let pl={
            first_Name:dt.first_Name,
            last_Name:dt.last_Name,
            email:dt.email,
            userType:dt.userType,
            address:dt.address,
            password:dt.password,
        }
            let newUser = await userModel(pl).save();
            if(newUser){
                res.status(200).send({status:200,message:"User created succefully",newUser})
            }else {
                res.status(202).json({ status: 200, message: "some problem saving user" })
            }
      }
   }catch(error){
       res.status(400).send({status:400,message:"something went wrong"})
   }
}


const authUser = async (req, res) => {
    const { email, password } = req.body;
    if ((!email ) && !password) {
       return res.status(400).send({
          status: 'error',
          message: 'All fields are required [email, password]!',
       });
    }
    try {
       if (email) {
          var user = await userModel.findOne({ $or: [{ email }] });
       } 
 
       if (!user)
          return res.status(200).send({
             status: 'error',
             message: "User doesn't exists!",
          });
       else {
          if (!(await compare(password, user.password)))
             return res.status(200).send({
                status: 'error',
                message: `Invalid Credentials`,
             });
          else {
            let userJson = {
                id: user._id,
                email: user.email,
                userType: "AD",
               
            };
            const token = jwt.sign(userJson, "user_secret_key_here");
             return res.status(200).json({
                // token: jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET ='jwttoken'),
                user: {
                   id: user._id,
                   token:token,
                },
             });
          }
       }
    } catch (error) {
       console.log('error', error);
       return res.status(500).send({ message: 'Something went wrong !' });
    }
 };
// login user
// const authUser = async(req,res)=>{
//     body("email").exists();
//     body("password").exists();
//     let payload={
//         email:req.body.email,
//         password:req.body.password,
//     }
//     try{
//         let findUser = await userModel.findOne({$or:[{email}],isDeleted:false});
//         if(!findUser){
//             res.status(200).send({status:200,message:"user not found"})
//         }else{
//            if(findUser){
//                bcrypt.compare
//            }

//         }
//     }catch(error){

//     }
// }


module.exports = {
    addUser,
    authUser,
}