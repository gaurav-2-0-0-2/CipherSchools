import Web from "./sub-components/Web"
import Map from "./sub-components/Map"
import DropdownMenu from "./sub-components/Dropdown"

export default function Body() {

    return (
        <div className="px-6 mt-6 bg-gray-200 py-4">
            <div className="flex flex-row justify-between mb-2">
                <h3 className="pt-2">ABOUT</h3>
                <button className="bg-orange-400 px-4 py-1 rounded-md">Edit</button>
            </div>
            <textarea className="mb-2 rounded-md" cols="180" rows="5"></textarea>
            <hr className="border-1 border-gray-400" />
            <div className="mt-2">
                <h3>CIPHER MAP</h3>
                <Map />
            </div>
            <hr className="border-1 border-gray-400" />
            <div className="mt-2">
                <div className="flex flex-row justify-between mb-2">
                    <h3 className="pt-2">ON THE WEB</h3>
                    <button className="bg-orange-400 px-4 py-1 rounded-md">Edit</button>
                </div>
                <div className="grid grid-cols-4 gap-1 mb-6">
                    <Web text="LinkdIn" />
                    <Web text="Github" />
                    <Web text="Facebook" />
                    <Web text="Twitter" />
                    <Web text="Instagram" />
                    <Web text="Website" />
                </div>
                <hr className="border-1 border-gray-400" />

                <div className="mt-4">
                    <div className="flex flex-row justify-between mb-2">
                        <h3 className="pt-2">PROFESSIONAL INFORMATION</h3>
                        <button className="bg-orange-400 px-4 py-1 rounded-md">Edit</button>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-4">
                        <div>
                            <DropdownMenu

                                ddi1='Primary'
                                ddi2='Secondary'
                                ddi3='Higher Secondary'
                                ddi4='Graduation'
                                ddi5='Post Graduation'
                            />
                        </div>
                        <div>
                            <DropdownMenu
                                ddi1='Schooling'
                                ddi2='Teaching'
                                ddi3='College Student'
                                ddi4='Job'
                                ddi5='Freelancing'
                            />
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    <div className="flex flex-row justify-between mb-2">
                        <h3 className="pt-2">INTERESTS</h3>
                        <button className="bg-orange-400 px-4 py-1 rounded-md">Edit</button>
                    </div>
                </div>

            </div>

        </div>
    )

}