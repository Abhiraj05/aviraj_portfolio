const Grid = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
  return (
    <>
      <div class="flex-wrap justify-center items-center md:grid md:grid-cols-3 md:gap-4 text-center mt-10 md:px-10 px-4.5">
        <div class="w-full h-full mb-6 md:mb-1">
          <img src={image1} class="" alt="" />
        </div>
        <div class="w-full h-full mb-6 md:mb-1">
          <img src={image2} alt="" />
        </div>
        <div class="w-full h-full mb-6 md:mb-1">
          <img src={image3} alt="" />
        </div>
        <div class="md:col-span-2 w-full h-full mb-6 md:mb-1">
          <img src={image4} alt="" />
        </div>
        <div class="mb-6 md:mb-1 w-full h-full">
          <img src={image5} className="h-[538.04px] w-[540px]" alt="" />
        </div>
        <div class="w-full h-full mb-6 md:mb-1 ">
          <img src={image6} className="h-[538.04px] w-[540px]" alt="" />
        </div>
        <div class="md:col-span-2 w-full h-full mb-6 md:mb-1">
          <img src={image7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
