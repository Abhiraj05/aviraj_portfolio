function NavBar(){
    return(
        <>
<nav className="flex md:justify-around  justify-between md:gap-[680px] items-center px-8 pt-4 pb-4 border-b-2 border-dashed border-white ">
            <div>
              <a
                href=""
                className="text-white font-['Montserrat', 'sans-serif'] font-bold uppercase md:text-xl text-[18px] tracking-tight"
              >
                aviraj
              </a>
            </div>
            <div>
              <ul className="flex justify-center items-center md:gap-14 gap-6 text-white font-mono font-light uppercase md:text-xl tracking-tight">
                <li>my works</li>
                <li>resume</li>
              </ul>
            </div>
          </nav>
      
        </>
    )
}
export default NavBar;