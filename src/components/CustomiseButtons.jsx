const CustomiseButtons=({link,buttonimage})=>{
    return (
        <>
        <a href={link} >
            <button className="text-white flex justify-center items-center gap-2 capitalize font-mono pt-3 pb-3 pr-3 pl-3 rounded-4xl border-[0.7px] md:text-xl text-[13.5px]">
                <img className="w-[18px]  hover:w-[16px] " src={buttonimage} alt="" />
                </button>
                </a>
        </>
    )
}
export default CustomiseButtons;