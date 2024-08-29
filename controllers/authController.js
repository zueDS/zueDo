const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;


async function registerUser(req, res) {
    let {firstName, lastName, username, password} = req.body;

    try{
        const duplicate = await User.find({username});
        if(duplicate && duplicate.length > 0){
            return res.status(400).send({message:'User already registered with this username'});
        }
        let user = new User({firstName, lastName, username, password});
        const result = await user.save();
        console.log(result);

        res.status(201).send({message:'User register successfully'});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

}

async function loginUser(req,res) {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).send({error:"Authentication Failed!"});
        }
        //compare the password
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(404).send({error:"Invalid Password!"});
        }
        let token = jwt.sign({userId:user?._id},secretKey,{expiresIn:'1h'});
        //creating data separately 
        let finalData = {
            userId:user?._id,
            username:user?.username,
            firstName:user?.firstName,
            lastName:user?.lastName,
            token
        }
        //send above data
        res.send(finalData);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

const AuthController = {
    registerUser,
    loginUser
}

module.exports = AuthController;