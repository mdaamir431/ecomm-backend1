const mongoose = require('mongoose');
var bcrypt = require("bcryptjs");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
first_Name:{type:String, trim:true},
last_Name:{type:String, trim:true},
email:{type:String, trim:true},
userType:{type:String,trim:true,enum:['User','Admin']},
address:[{
    city:{type:String, tirm:true},
    state:{type:String, trim:true},
    pincode:{type:Number,trim:true}
}],
password:{type:String, trim:true},
token:{type:String, trim:true},
isDeleted: { type: Boolean, default: false },
isEnabled: { type: Boolean, default: true }
},{timestamps:true},{collection:"users"});

userSchema.pre("save", function(next) {
    var user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err2, hash) {
            user.password = hash;
            next();
        });
    });
});

module.exports =mongoose.model("users",userSchema);