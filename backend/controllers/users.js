import bcrypt from 'bcrypt';
import User from '../models/Users.js';
import jwt  from 'jsonwebtoken';


/* REGISTER USER */

export const register = async (req, res) => {


	try {
		const {
			firstName,
			lastName,
			email,
			phoneNumber,
			password

		} = req.body

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber: phoneNumber,
			password: passwordHash
		});
    const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
    res.status(500).json({error: err.message})
	}

};


/* LOGIN USER */

export const login = async (req, res)=>{
	 try {
		const {email, password} = req.body;
		const user = await User.findOne({email: email});
		
		if(!user) return res.status(400).json({msg: 'User does not exist.'});

		const isMatch = await bcrypt.compare(password, user.password);
		if(!isMatch) return res.status(400).json({msg: 'Invalid credentials.'})

		const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
		
		res.status(200).json({token, user});
	 } catch (err) {
		  res.status(500).json({error: err.message})
	 }
};

