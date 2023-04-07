import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setlogin] = useState(false);


    const configuration = {
        method: "post",
        url: "http://localhost:3000/login",
        data: {
            email,
            password
        }
    }

    axios(configuration)
        .then((result) => {
            setLogin(true);
        })
        .catch((error) => {
            error = new Error();
        });


    const handleSubmit = (e) => {

        e.preventDefault();
        // alert("Submitted");
    }




    return (
        <section>
            <div className="fixed top-[5%] left-[35%] shadow-2xl p-6">
                <h1>Signin</h1>
                <div className="flex flex-col gap-2 text-center p-10">
                    <h1>CipherSchools</h1>
                    <p>Hey, Welcome!</p>
                    <p>Please provide your email and password to signin</p>
                    <form action="post" className="flex flex-col gap-2 mt-4">
                        <input type="email" className="px-2 py-2 rounded-lg bg-gray-200" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="px-2 py-2 rounded-lg bg-gray-200" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                       <Link to="/profile"><button type="submit" onSubmit={handleSubmit} className=" bg-orange-400 px-2 py-2 rounded-lg">Signin</button></Link> 
                        <p>Don't have an account ? <Link to="/" className="text-orange-400">Get Started</Link></p>
                    </form>
                </div>
            </div>
        </section>

    )
}