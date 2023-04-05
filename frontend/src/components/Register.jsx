import Signin from "./Signin";
import {Link} from "react-router-dom";

export default function Register(){
    return (
        <section>
            <div className="fixed top-[5%] left-[35%] shadow-2xl p-6">
                <h1>SignUp</h1>
                <div className="flex flex-col gap-2 text-center p-10">
                    <h1>CipherSchools</h1>
                    <p>Create New Account</p>
                    <p>Please provide your valid informations to signup</p>
                    <form action="post" className="flex flex-col gap-2 mt-4">
                        <input type="text" className="px-2 py-2 rounded-lg bg-gray-200" placeholder="First Name" />
                        <input type="text" className="px-2 py-2 rounded-lg bg-gray-200" placeholder="Last Name" />
                        <input type="email" className="px-2 py-2 rounded-lg bg-gray-200" name="" id="" placeholder="Email" />
                        <input type="text" className="px-2 py-2 rounded-lg bg-gray-200" name="" id="" placeholder="Phone Number (Optional)"/>
                        <input type="password" className="px-2 py-2 rounded-lg bg-gray-200" name="" id="" placeholder="Password" />
                        <button type="submit" className=" bg-orange-400 px-2 py-2 rounded-lg"> Create Account</button>
                        <p>Already have an account ? <Link to="Signin" className="text-orange-400">Signin Now</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

