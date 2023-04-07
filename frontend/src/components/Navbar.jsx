
import { FaRegCompass } from "react-icons/fa";


export default function Navbar() {

	return (
		<div className=" flex flex-row justify-between px-6 mt-3">
			<div className="flex flex-row gap-4">
				<img src="" alt="logo" />
				<h1>CipherSchools</h1>
				<div className="flex flex-row gap-2">
					<FaRegCompass />
					<h1>Browse</h1>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<input className=" bg-gray-300 rounded-xl w-[15rem]" type="text" />
				{/* bellicon */}
				<img src="" alt="logo" />
				{/* copyght */}
				<p>234</p>
				{/* some logo*/}
			</div>
		</div>
	)
}