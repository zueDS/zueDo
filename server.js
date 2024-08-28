const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Database connected successfully!");
}).catch(err=>{
    console.log("Not connected",err);
})

app.listen(PORT,()=>{
    console.log(`Server start at port ${PORT}`);
})