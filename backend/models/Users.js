import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
       
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phoneNumber: {
      type: String,
      max: 10,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 5,
    }
})

const User = mongoose.model('User', userSchema);

export default User;