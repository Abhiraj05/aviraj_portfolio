function NavBar(){
    return(
        <>
      <nav className="flex justify-around align-middle gap-[640px] pt-4">
        <div>
           <a href="" className="text-[#000000] font-['Montserrat', 'sans-serif'] font-bold uppercase text-xl tracking-tight">abhiraj</a>
        </div>
        <div>
            <ul className="flex justify-center align-middle gap-14 text-[#000000] font-mono font-light uppercase text-xl tracking-tight">
                <li>my works</li>
                <li>resume</li>
            </ul>
        </div>
      </nav>
        </>
    )
}
export default NavBar;