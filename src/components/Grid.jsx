import React, { use, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const Grid = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
  const [value, setvalue] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
    div6: false,
    div7: false,
  });
  const changevalue = (key) => {
    setvalue((prev) => {
      if (prev[key]) {
        return {
          div1: false,
          div2: false,
          div3: false,
          div4: false,
          div5: false,
          div6: false,
          div7: false,
        };
      }

      return {
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
        [key]: true,
      };
    });
  };
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
      <div className="flex-wrap justify-center items-center md:grid md:grid-cols-3 md:gap-4 text-center mt-10 md:px-10 px-4.5">
        <div
          className="w-full h-full mb-6 md:mb-1 grid-element-r"
          onClick={() => changevalue("div1")}
        >
          {value.div1 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img src={image1} className={`rounded-sm ${value.div1? 'opacity-28': 'opacity-100'}`} alt="" />
        </div>
        <div
          className="w-full h-full mb-6 md:mb-1 md:grid-element-t grid-element-l"
          onClick={() => changevalue("div2")}
        >
          {value.div2 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img src={image2} className={`rounded-sm ${value.div2? 'opacity-28': 'opacity-100'}`} alt="" />
        </div>
        <div
          className="w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r"
          onClick={() => changevalue("div3")}
        >
          {value.div3 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img src={image3} className={`rounded-sm ${value.div3? 'opacity-28': 'opacity-100'}`} alt="" />
        </div>
        <div
          className="md:col-span-2 w-full h-full mb-6 md:mb-1 md:grid-element-r grid-element-l"
          onClick={() => changevalue("div4")}
        >
          {value.div4 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img src={image4} className={`rounded-sm ${value.div4? 'opacity-28': 'opacity-100'}`} alt="" />
        </div>
        <div
          className="mb-6 md:mb-1 w-full h-full md:grid-element-l grid-element-r"
          onClick={() => changevalue("div5")}
        >
          {value.div5 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img
            src={image5}
            className={`h-[538.04px] w-[540px] rounded-sm ${value.div5? 'opacity-28': 'opacity-100'}`}
            alt=""
          />
        </div>
        <div
          className="w-full h-full mb-6 md:mb-1 md:grid-element-r grid-element-l"
          onClick={() => changevalue("div6")}
        >
          {value.div6 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img
            src={image6}
            className={`h-[538.04px] w-[540px] rounded-sm ${value.div6? 'opacity-28': 'opacity-100'}`}
            alt=""
          />
        </div>
        <div
          className="md:col-span-2 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r"
          onClick={() => changevalue("div7")}
        >
          {value.div7 && (
            <p className="absolute inset-0 w-full h-full object-cover flex justify-center items-center font-extralight tracking-wider text-white text-[40px] anton-font">
              hello
            </p>
          )}
          <img src={image7} className={`rounded-sm ${value.div7? 'opacity-28': 'opacity-100'}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
