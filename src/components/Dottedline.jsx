import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Dottedline=({type,ide})=>{
    useEffect(() => {
    ScrollReveal().reveal(".dotted-element", {
      delay: 300,
      duration: 800,
      origin: "top",
      distance: "40px",
    });
  }, []);
    return(
        <>
    <div id={ide} className="bg-[#292929] pt-10  text-center md:text-left dotted-element">
        <h3 className="uppercase text-white font-['Montserrat', 'sans-serif'] font-extrabold mt-3.5 md:pl-20 md:text-4xl  text-2xl tracking-wide">
          {type}
        </h3>
        <div className="border-[0.2px] border-dashed mt-4 border-white mx-11 "></div>
      </div>
        </>
    )
}

export default Dottedline;