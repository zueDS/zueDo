const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    userName : {type: String, required:true},
    password : {type: String, required:true}
});


const User = mongoose.model("User", userSchema);


module.exports = User;