import { useState } from "react";
import Signin from "./Signin";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Register(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    


    //   {register ? (
    //       <p className="text-success">You Are Registered Successfully</p>
    //     ) : (
    //       <p className="text-danger">You Are Not Registered</p>
    // )}

    const handleSubmit = async (e)=>{
        e.preventDefault();
         try {
          const response = await axios.post('http://localhost:3000/register', 
          { firstName,lastName,email,phoneNumber,password });
            navigate('/signin')
        } catch (error) {
            console.log("user not registered");
        }
        
    }




    return (
        <section>
            <div className="fixed top-[5%] left-[35%] shadow-2xl p-6">
                <h1>SignUp</h1>
                <div className="flex flex-col gap-2 text-center p-10">
                    <h1>CipherSchools</h1>
                    <p>Create New Account</p>
                    <p>Please provide your valid informations to signup</p>
                    <form  className="flex flex-col gap-2 mt-4">
                        <input type="text" name='firstName' value={firstName} className="px-2 py-2 rounded-lg bg-gray-200" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                        <input type="text" name="lastName" value={lastName} className="px-2 py-2 rounded-lg bg-gray-200" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                        <input type="email" name="email" value={email} className="px-2 py-2 rounded-lg bg-gray-200" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" name="phoneNumber" value={phoneNumber} className="px-2 py-2 rounded-lg bg-gray-200" placeholder="Phone Number (Optional)"onChange={(e)=>setPhoneNumber(e.target.value)}/>
                        <input type="password" name="password" value={password} className="px-2 py-2 rounded-lg bg-gray-200" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" onClick={handleSubmit}  className=" bg-orange-400 px-2 py-2 rounded-lg"> Create Account</button>
                        <p>Already have an account ? <Link to="signin" className="text-orange-400">Signin Now</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

