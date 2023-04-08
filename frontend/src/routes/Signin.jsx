import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/login', { email, password });
          localStorage.setItem('token', response.data.token);  //Store the token in local storage
          if(!isLoggedIn){
            navigate('/profile')
          }
        } catch (error) {
            if (error.response && error.response.status === 401 || error.response.status === 403) {
                setError('Invalid email or password');
              } else {
                setError('Something went wrong. Please try again later.');
              }
        }
      };












    return (
        <section>
            <div className="fixed top-[5%] left-[35%] shadow-2xl p-6">
                <h1>Signin</h1>
                <div className="flex flex-col gap-2 text-center p-10">
                    <h1>CipherSchools</h1>
                    <p>Hey, Welcome!</p>
                    <p>Please provide your email and password to signin</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
                        <input type="email" className="px-2 py-2 rounded-lg bg-gray-200" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="px-2 py-2 rounded-lg bg-gray-200" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit"  className=" bg-orange-400 px-2 py-2 rounded-lg">Signin</button>
                        <p>Don't have an account ? <Link to="/" className="text-orange-400">Get Started</Link></p>
                    </form>
                </div>
            </div>
        </section>

    )
}