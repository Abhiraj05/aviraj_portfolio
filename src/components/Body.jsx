import CustomiseButtons from "./CustomiseButtons";
import Linkdin from "../assets/Negative.svg";
import Instagram from "../assets/Original.svg";

function Body() {
  return (
    <>
      <div className=" md:flex sm:flex-wrap md:justify-around md:items-center md:gap-7 mt-24  ">
        <div>
          <div className="text-[#000000] font-['Montserrat', 'sans-serif'] font-extrabold uppercase md:text-8xl tracking-tight">
            <h3>abhiraj</h3>
            <h3>shilkar</h3>
          </div>
          <div className="mt-10 flex justify-self-start items-center gap-5 ">
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim et
            quaerat
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
