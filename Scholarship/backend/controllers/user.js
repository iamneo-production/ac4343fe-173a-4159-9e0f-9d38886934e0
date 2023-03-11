const User  = require("../models/User");
const bcrypt = require("bcrypt"), salt = 10;
const validator = require('validator');
const { responseMessage } = require("../utils/response");

const registerUser = async( { body },res)=>{
    try {
        let { name, email, password } =  body;
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(409).send({ success: false, message: "User already exists." });  
       if(!validator.isEmail(email))return res.status(400).send({ success: false, message: "Email is not valid." });
        password = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password });
        newUser.save();
        return res.status(201).json({ success: true, message : "User registered" , data: newUser });
    } catch (e) {
      console.log(`error : ${e.message}`);
      return res.status(400).json({ success: false, message: responseMessage.badRequest, error : e.message });       
    }
}

const loignUser = async({ body }, res)=>{
    try {
       const { email, password  } = body; 
       const findUser = await User.findOne({ email });
       if(!findUser) return res.status(404).json({ success: false, msg : "This email not found!"});
       const verifyPassword = bcrypt.compare(password, findUser.password);
       if(verifyPassword){
      return res.status(200).json({ success: true, message : responseMessage.loginSuccess , data : findUser }); } 
      else return res.status(401).json({ success: false, message : responseMessage.wrongPassword });     
    } catch (e) {
    console.log(`error : ${e.message}`);      
    return res.status(500).json({ success: false,error : e.message });               
    }
};

module.exports = { registerUser, loignUser };