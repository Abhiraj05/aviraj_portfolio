const Grid = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
  return (
    <>
      <div class="flex-wrap justify-center items-center gap-4 md:grid md:grid-cols-3 md:gap-4 text-center mt-4 px-10">
        <div class="w-full h-full">
          <img src={image1} class="" alt="" />
        </div>
        <div class="w-full h-full">
          <img src={image2} alt="" />
        </div>
        <div class="w-full h-full">
          <img src={image3} alt="" />
        </div>
        <div class="col-span-2 w-full h-full">
          <img src={image4} alt="" />
        </div>
        <div class="">
          <img src={image5} className="h-[538.04px] w-[540px]" alt="" />
        </div>
        <div class="w-full h-full">
          <img src={image6} alt="" />
        </div>
        <div class="col-span-2 w-full h-full">
          <img src={image7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
