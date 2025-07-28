const Grid = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
  return (
    <>
      <div class="flex-wrap justify-center items-center gap-4 md:grid md:grid-cols-3 md:gap-4 text-center mt-4">
        <div class="">
          <img src={image1} class="" alt="" />
        </div>
        <div class="...">
          <img src={image2} alt="" />
        </div>
        <div class="...">
          <img src={image3} alt="" />
        </div>
        <div class="col-span-2 ...">
          <img src={image4} alt="" />
        </div>
        <div class="...">
          <img src={image5} alt="" />
        </div>
        <div class="...">
          <img src={image6} alt="" />
        </div>
        <div class="col-span-2 ...">
          <img src={image7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Grid;
