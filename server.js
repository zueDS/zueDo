const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
require('dotenv').config();

const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api/todo',toDoRoutes);

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Database connected successfully!");
}).catch(err=>{
    console.log("Not connected",err);
})

app.listen(PORT,()=>{
    console.log(`Server start at port ${PORT}`);
})