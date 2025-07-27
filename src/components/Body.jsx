import CustomiseButtons from "./CustomiseButtons";
import Linkdin from "../assets/Negative.svg";
import Instagram from "../assets/Original.svg";
import image from "../assets/img.jpg"

function Body() {
  return (
    <>
      <div className=" md:flex sm:flex-wrap  md:justify-around md:items-center md:gap-7 mt-24  ">
        <div>
          <div className="text-[#000000] font-['Montserrat', 'sans-serif'] font-extrabold uppercase md:text-9xl tracking-tight ml-10 text-4xl">
            <h3>abhiraj</h3>
            <h3>shilkar</h3>
          </div>
          <div className="mt-10 flex md:justify-self-start md:items-center justify-center items-center gap-3 md:gap-5 md:ml-10 ">
            <CustomiseButtons
              buttonimage={Linkdin}
              link={"https://openai.com/index/chatgpt/"}
              buttonname="visit linkdin"
              className=""
            ></CustomiseButtons>
            <CustomiseButtons
              buttonimage={Instagram}
              link={"https://openai.com/index/chatgpt/"}
              buttonname="visit instagram"
              className=""
            ></CustomiseButtons>
          </div>
        </div>
        <div>
          <div className="md:justify-items-end">
            <img className="w-[300px] h-[70px] rounded-4xl"  src={image} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, 

          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
