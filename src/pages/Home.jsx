import CustomiseButtons from "../components/CustomiseButtons";
import Linkdin from "../assets/Linkdin.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/Facebook.svg";
import bg from "../assets/img.jpg";
import NavBar from "../components/Navbar";
import Grid from "../components/Grid";
import img1 from "../assets/IMG_0152.JPG"
import img2 from "../assets/astronut.jpg"
import img3 from "../assets/LH_Wallpaper.png"
import img4 from "../assets/M351310.jpg"
import img5 from "../assets/M351781.jpg"
import img6 from "../assets/M351790.jpg"
import img7 from "../assets/M35131010.jpg"


function Home() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={bg}
          alt=""
        />

        <div className="absolute inset-0 flex flex-col md:bg-black/30 bg-black/20">
          <NavBar></NavBar>

          <div className="flex flex-col justify-center md:items-start md:mt-36 mt-36 md:px-36  items-center ">
            <div className="text-white font-['Montserrat', 'sans-serif'] font-extrabold text-center uppercase md:text-[150px] tracking-wider text-8xl">
              <h3>avi</h3>
              <h3>raj</h3>
              <p className="md:text-[22px] text-[15px] pt-4 text-[#ffe600]">
                an fineart artist
              </p>
            </div>

            <div className="mt-10 md:pl-18 flex justify-center items-center gap-3 md:gap-5">
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
              <CustomiseButtons
                buttonimage={Facebook}
                link={"https://openai.com/index/chatgpt/"}
                // buttonname="visit instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#292929] pt-10 md:px-20 text-center   md:text-left">
        <h3 className="uppercase text-white font-['Montserrat', 'sans-serif'] font-extrabold mt-3.5 md:pl-20 md:text-4xl  text-2xl tracking-wide">
          my work
        </h3>
        <div className="border-[0.2px] border-dashed mt-4 border-white mx-11"></div>
      </div>
      <Grid image1={img1} 
      image2={img1}
      image3={img1}
      image4={img4}
      image5={img2}
      image6={img6}
      image7={img7}
      ></Grid>
    </>
  );
}

export default Home;
