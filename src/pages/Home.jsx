import CustomiseButtons from "../components/CustomiseButtons";
import Linkdin from "../assets/Linkdin.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/Facebook.svg";
import X from "../assets/x.svg";
import backgroundimage from "../assets/img.jpg";
import NavBar from "../components/Navbar";
import Grid from "../components/Grid";
import img1 from "../assets/IMG_0152.JPG";
import img2 from "../assets/astronut.jpg";
import img3 from "../assets/LH_Wallpaper.png";
import img4 from "../assets/M351310.jpg";
import img5 from "../assets/M351781.jpg";
import img6 from "../assets/M351790.jpg";
import img7 from "../assets/M35131010.jpg";
import Dottedline from "../components/Dottedline";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Pdfpreviewer from "../components/Pdfpreviewer";

function Home() {
  useEffect(() => {
    ScrollReveal().reveal(".my-element", {
      delay: 400,
      duration: 800,
      origin: "bottom",
      distance: "40px",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".footer-element", {
      delay: 400,
      duration: 800,
      origin: "bottom",
      distance: "40px",
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {" "}
        <div className="relative w-full h-screen overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundimage}
            alt=""
          />
          <div className="absolute inset-0 flex flex-col md:bg-black/30 bg-black/20">
            <NavBar></NavBar>
            <div className="flex flex-col justify-center md:items-start md:mt-36 mt-36 md:px-36  items-center my-element">
              <div className="text-white anton-font  text-center uppercase md:text-[150px] tracking-widest text-8xl">
                <h3 className="font-extrabold">avi</h3>
                <h3 className="font-extrabold">raj</h3>
                <p className="md:text-[22px] text-[15px] pt-4 text-[#ffe600] font-medium">
                  an fineart artist
                </p>
              </div>
              <div className="mt-10 md:pl-18 flex justify-center items-center gap-3 md:gap-5">
                <CustomiseButtons
                  buttonimage={Linkdin}
                  link={"https://www.linkedin.com/in/aviraj-shilkar-a8ab34217/"}
                />
                <CustomiseButtons
                  buttonimage={Instagram}
                  link={"https://openai.com/index/chatgpt/"}
                />
                 <CustomiseButtons
                  buttonimage={X}
                  link={"https://www.facebook.com/share/1G9W5e8ZWk/"}
                />
                <CustomiseButtons
                  buttonimage={Facebook}
                  link={"https://www.facebook.com/share/1G9W5e8ZWk/"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Dottedline ide={"link1"} type={"my work"}></Dottedline>
        <Grid
          image1={img1}
          image2={img1}
          image3={img1}
          image4={img4}
          image5={img2}
          image6={img2}
          image7={img7}
        ></Grid>
        {/* <Pdfpreviewer></Pdfpreviewer> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Dottedline ide={"link2"} type={"contact"}></Dottedline>
        <div className="text-center mt-10 mb-10 md:px-10 px-4.5 my-element">
          <form action="https://api.web3forms.com/submit" method="POST">
           <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
            <div className="mb-6">
              <input
                className="bg-white pl-3 w-85 h-12 placeholder:capitalize placeholder:font-['Montserrat', 'sans-serif'] rounded-sm"
                type="text"
                placeholder="your name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="bg-white pl-3 w-85 h-12 placeholder:capitalize placeholder:font-['Montserrat', 'sans-serif'] rounded-sm"
                type="text"
                placeholder="your email"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="bg-white pl-3 w-85 h-22 pt-2 resize-none placeholder:capitalize placeholder:font-['Montserrat', 'sans-serif'] rounded-sm"
                type="text"
                placeholder="your message" required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="bg-[#F3273D] px-[109px] py-2 capitalize text-white inter-font font-medium text-[16px] rounded-sm">
              send message
              </button>
            </div>
          </form>
        </div>
        <footer className="mt-10 bg-[#02589b] pt-10 footer-element">
          <h3 className="text-white anton-font  font-medium uppercase md:text-[30px] text-[20px] tracking-widest md:pl-22 pl-10 mb-10">
            {" "}
            aviraj
          </h3>
          <div className="text-center pb-4">
            <p className="text-white capitalize md:text-[14.5px] text-[13px] inter-font">
              &copy;all rights are reserved
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Home;
