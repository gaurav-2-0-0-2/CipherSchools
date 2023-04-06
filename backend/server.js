import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import mongoose from 'mongoose';
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL);

app.get('/', (req,res)=>{
    res.send("Hello");
})

app.listen(PORT, ()=>{
    console.log("Server is listening.")
})