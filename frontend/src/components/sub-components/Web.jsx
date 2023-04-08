


export default function Web({ text, iconName }){
    return (
        <div className="relative">
            <h3>{text}</h3>
            <div className="absolute p-2 ">{iconName}</div>
            <input className="w-[20rem] rounded-md mt-1 pl-7" type="text"/>
        </div>
    )
}