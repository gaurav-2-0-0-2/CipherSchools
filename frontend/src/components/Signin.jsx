import {Link} from 'react-router-dom';

export default function () {


    return(
        <section>
            <div className="fixed top-[5%] left-[35%] shadow-2xl p-6">
                <h1>Signin</h1>
                <div className="flex flex-col gap-2 text-center p-10">
                    <h1>CipherSchools</h1>
                    <p>Hey, Welcome!</p>
                    <p>Please provide your email and password to signin</p>
                    <form action="post" className="flex flex-col gap-2 mt-4">
                        <input type="email" className="px-2 py-2 rounded-lg bg-gray-200" name="" id="" placeholder="Email" />
                        <input type="password" className="px-2 py-2 rounded-lg bg-gray-200" name="" id="" placeholder="Password" />
                        <button type="submit" className=" bg-orange-400 px-2 py-2 rounded-lg">Signin</button>
                        <p>Don't have an account ? <Link to="/" className="text-orange-400">Get Started</Link></p>
                    </form>
                </div>
            </div>
        </section>

    )
}