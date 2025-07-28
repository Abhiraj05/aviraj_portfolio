import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Grid = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
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
        <div className="w-full h-full mb-6 md:mb-1 grid-element-r">
          <img src={image1} alt="" />
        </div>
        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-t grid-element-l">
          <img src={image2} alt="" />
        </div>
        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <img src={image3} alt="" />
        </div>
        <div className="md:col-span-2 w-full h-full mb-6 md:mb-1 md:grid-element-r grid-element-l">
          <img src={image4} alt="" />
        </div>
        <div className="mb-6 md:mb-1 w-full h-full md:grid-element-l grid-element-r">
          <img src={image5} className="h-[538.04px] w-[540px]" alt="" />
        </div>
        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-r grid-element-l">
          <img src={image6} className="h-[538.04px] w-[540px]" alt="" />
        </div>
        <div className="md:col-span-2 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <img src={image7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
