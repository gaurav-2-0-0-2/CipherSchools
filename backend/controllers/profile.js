import User from "../models/Users.js"

export const profile =  async (req, res)=>{
   try {
    const profiles = await User.find();
    res.json(profiles);
   } catch (error) {
    res.status(500).send(error);
   }
    
}