import CustomiseButtons from "../components/CustomiseButtons";
import Linkdin from "../assets/Linkdin.svg";
import Instagram from "../assets/instagram.svg";
import bg from "../assets/img.jpg";
import NavBar from "../components/Navbar";
function Home() {
  return (
    <>
      <div className="relative w-full h-screen  ">
       
        <img
          className="absolute inset-0 w-full h-full object-cover "
          src={bg}
          alt=""
        />
        
        <div className="absolute inset-0 flex flex-col md:bg-black/30 bg-black/20">
       
          <NavBar></NavBar>

       
          <div className="flex flex-col justify-center md:items-start md:mt-36 mt-36 md:px-36  items-center ">
            <div className="text-white font-['Montserrat', 'sans-serif'] font-extrabold text-center uppercase md:text-[150px] tracking-wider text-8xl">
              <h3>avi</h3>
              <h3>raj</h3>
            </div>

            <div className="mt-10 md:pl-26 flex justify-center items-center gap-3 md:gap-5">
              <CustomiseButtons 
                buttonimage={Linkdin}
                link={"https://openai.com/index/chatgpt/"}
                // buttonname="visit linkdin"
              />
              <CustomiseButtons
                buttonimage={Instagram}
                link={"https://openai.com/index/chatgpt/"}
                // buttonname="visit instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
