import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Body from '../components/Body';




export default function Profile() {
  
    const [message, setmessage] = useState(" ");


    useEffect(() => {
        const configuration = {
            method: "get",
            url: "http://localhost:3000/register",
        }

        // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
        console.log(result.data.message)
      })
      .catch((error) => {
        error = new Error();
      });
    },[])






    return (
        <div>
            <Navbar/>
            <Intro/>
            <Body/>
        </div>
    )
}