
import logo from '../assets/logo.png'
import { FaPenAlt } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Intro() {

    const [profileData, setProfileData] = useState([]);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          console.log(response.data);
          setProfileData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
    }, [token]);
    
    return (
        <div className="flex flex-row justify-between mt-10 px-6">
            <div className="flex flex-row gap-5">
                <div className='relative'>
                    <img src={logo} className='w-[60px] h-[60px]' alt="logo" />
                    <FaPenAlt size={20} className='rounded-full absolute right-2 bottom-[0.2px] text-white' />
                </div>
                <div className=''>
                    <h3>Hello</h3>
                    <h1>Cipher Schools</h1>
                    <p>{profileData.email}</p>
                </div>
            </div>
            <div>
                <h1>**.2k Followers</h1>
            </div>
        </div>
    )
}