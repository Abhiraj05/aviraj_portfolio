import React,{ useEffect } from "react";
import ScrollReveal from 'scrollreveal';

function NavBar(){
    useEffect(() => {
    ScrollReveal().reveal('.nav-element', {
      delay: 300,
      duration: 800,
      origin: 'top',
      distance: '40px',
    });
    
  }, []);
    return(
        <>
<nav className="flex md:justify-around  justify-between md:gap-[756px] items-center px-8 pt-4 pb-4 border-b-2 border-dashed border-white nav-element">
            <div>
              <a
                href="index.html"
                className="text-white anton-font font-light uppercase md:text-xl text-[18px] tracking-widest"
              >
                  aviraj
              </a>
            </div>
            <div>
              <ul className="flex justify-center items-center md:gap-14 gap-6 text-white tuffy-font  capitalize md:text-[16.6px] text-[14.6px] md:text-xl tracking-widest">
                <a href="#link1" className="hover:underline"><li className="">my works</li></a>
                <a href="#link2"><li className="hover:underline">contact</li></a>
              </ul>
            </div>
          </nav>
      
        </>
    )
}
export default NavBar;