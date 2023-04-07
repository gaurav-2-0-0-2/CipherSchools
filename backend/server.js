import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

import mongoose from 'mongoose';
app.use(express.json());
import { register,login } from './controllers/users.js';
app.use(cors());
const PORT = process.env.PORT || 5000;


/*MongoDB connection*/

mongoose.connect(process.env.MONGODB_URL, {
    //   these are options to ensure that the connection is done properly
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
})
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
    });

const router = express.Router();
/*ROUTES*/
app.get('/', (req, res) => {
    res.send("Hello");
})




app.post("/register", register);

app.post("/login", login);






app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})