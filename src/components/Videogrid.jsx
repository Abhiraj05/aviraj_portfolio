import React, { use, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const Videogrid = ({
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,


}) => {
  
  useEffect(() => {
    ScrollReveal().reveal(".grid-element-r", {
      delay: 300,
      duration: 800,
      origin: "right",
      distance: "40px",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".grid-element-l", {
      delay: 300,
      duration: 800,
      origin: "left",
      distance: "40px",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".grid-element-t", {
      delay: 300,
      duration: 800,
      origin: "top",
      distance: "40px",
    });
  }, []);
  return (
    <>
      <div className="flex-wrap justify-center items-center md:grid md:grid-cols-3 md:gap-4 text-center mt-10 md:px-10 px-4.5 ">
        <div className="w-full h-full mb-6 md:mb-1 grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v1} />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title1}
            </h3>
          </div>
        </div>

        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-t grid-element-l">
          <video controls autoPlay muted loop>
            <source src={v2} />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title2}
            </h3>
          </div>
        </div>

        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v3} />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title3}
            </h3>
          </div>
        </div>

        <div className="md:row-span-1 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v4} />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title4}
            </h3>
          </div>
        </div>

        <div className="md:row-span-1 md:w-[468px] h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v5} />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title5}
            </h3>
          </div>
        </div>

        
        <div className="md:row-span-1 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v6}  />
          </video>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title6}
            </h3>
          </div>
        </div>

        {/* <div className="md:col-span-2 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <video controls autoPlay muted loop>
            <source src={v7} />
          </video>
          <div>
            <h3 className="md:text-[38px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title7}
            </h3>
          </div>
        </div>
        <div className=" md:row-span-1  w-full h-full mb-6 md:mb-1 md:grid-element-r grid-element-l">
          <video controls autoPlay muted loop>
            <source src={v8} />
          </video>
          <div>
            <h3 className="md:text-[38px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title8}
            </h3>
          </div>
        </div>          */}
      </div>
    </>
  );
};

export default Videogrid;
