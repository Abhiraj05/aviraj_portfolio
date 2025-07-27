const CustomiseButtons=({buttonname,link,buttonimage})=>{
    return (
        <>
        <a href={link} >
            <button className="flex justify-center items-center gap-2 capitalize font-mono pt-[1.9px] pb-[1.9px] pr-4 pl-4 rounded-3xl border-[0.7px]">
                <img className="w-[18px]" src={buttonimage} alt="" />{buttonname}
                </button>
                </a>
        </>
    )
}
export default CustomiseButtons;