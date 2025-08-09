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
  a1,a2,a3,a4,a5,a6
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
          <a href={a1}>
            <img src={v1} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title1}
            </h3>
          </div>
        </div>

        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-t grid-element-l">
          <a href={a2}>
            <img src={v2} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title2}
            </h3>
          </div>
        </div>

        <div className="w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <a href={a3}>
            <img src={v3} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title3}
            </h3>
          </div>
        </div>

        <div className="md:row-span-1 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <a href={a4}>
            <img src={v4} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title4}
            </h3>
          </div>
        </div>

        <div className="md:row-span-1 md:w-[468px] h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <a href={a5}>
            <img src={v5} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title5}
            </h3>
          </div>
        </div>

        <div className="md:row-span-1 w-full h-full mb-6 md:mb-1 md:grid-element-l grid-element-r">
          <a href={a6}>
            <img src={v6} alt="" />
          </a>
          <div>
            <h3 className="md:text-[32px] text-[20px] capitalize text-[#FFCDAD] tuffy-font mt-2">
              {title6}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videogrid;
