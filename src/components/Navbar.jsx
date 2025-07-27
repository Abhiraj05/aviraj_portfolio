function NavBar(){
    return(
        <>
      <nav className="flex justify-around align-middle md:gap-[640px] pt-4 pb-4  border-b-4 border-double">
        <div>
           <a href="" className="text-[#000000] font-['Montserrat', 'sans-serif'] font-bold uppercase md:text-xl text-[18px] tracking-tight">abhiraj</a>
        </div>
        <div>
            <ul className="flex justify-center align-middle md:gap-14 gap-3 text-[#000000] font-mono font-light uppercase md:text-xl tracking-tight">
                <li>my works</li>
                <li>resume</li>
            </ul>
        </div>
      </nav>
        </>
    )
}
export default NavBar;