const CustomiseButtons=({buttonname,link,buttonimage})=>{
    return (
        <>
        <a href={link} className="text-mono uppercase">
            <button>
                <img src={buttonimage} alt="" />{buttonname}
                </button>
                </a>
        </>
    )
}
export default CustomiseButtons;