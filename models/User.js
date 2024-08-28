const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    userName : {type: String, required:true},
    password : {type: String, required:true}
});

//encrypt the password into # using pre method
userSchema.pre("save", async function(next){
   const user = this;
   if(!user.isModified('password')) return next();
   let salt = await bcrypt.genSalt(10);
   let hash = await bcrypt.hash(user.password,salt);
   user.password = hash;
   next(); 
});

//compare the password, check weather user entered password matching to the #password which is in database.
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);


module.exports = User;