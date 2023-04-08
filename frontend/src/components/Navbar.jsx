
import { FaRegCompass } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import {HiOutlineAdjustments} from 'react-icons/hi';
import {HiChevronDown} from 'react-icons/hi';

import logo from '../assets/logo.png'


export default function Navbar() {

	return (
      <div className="">
		<div className=" flex flex-row justify-between px-6 mt-3 shadow-xl pb-4">
			<div className="flex flex-row gap-2">
				<img src={logo} width={30} className="" alt="logo" />
				<h1 className="font-bold mt-1">CipherSchools</h1>
				<div className="flex flex-row gap-2 mt-1 ml-4">
					<FaRegCompass className="mt-[5px]" />
					<h1>Browse</h1>
					<HiChevronDown className="mt-[6px]"/>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<div className="relative">
					<FaSearch className="mt-[7px] absolute left-2 bottom-[8px]" />
					<input className=" bg-gray-300 rounded-2xl w-[20rem] px-7 mt-[2px]" type="text" />
				    <HiOutlineAdjustments className="absolute right-1 top-[6px] rotate-[90deg]"/>
				</div>
				<FaBell className="mt-[5px]" />
				<img src={logo} className="w-[15px] h-[15px] mt-[5px]" alt="logo" />
				<FaCopyright className="mt-1" />
				<p>234</p>
				{/* some logo*/}
			</div>
		</div>

	  </div>	
	)
}