const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name : { type : String, require : [true, "Name is required"] },
    email : { type : String, require :[true, "Email is required"], unique : true },
    password : { type : String, require : [true, "Password is required"] }
}, { timestamps : true });

module.exports = mongoose.model("User", userSchema );