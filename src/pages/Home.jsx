import CustomiseButtons from "../components/CustomiseButtons";
import Linkdin from "../assets/Linkdin.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/Facebook.svg";
import X from "../assets/x.svg";
import Whatsapp from "../assets/Whatsapp.svg"
import backgroundimage from "../assets/img.jpg";
import NavBar from "../components/Navbar";
import Grid from "../components/Grid";
import img1 from "../assets/jbl hording ad.png";
import img2 from "../assets/jbl hording ad 2.png";
import img3 from "../assets/jbl hording ad 3.png";
import img4 from "../assets/insta ads posts.png";
import img5 from "../assets/jbl ad posters.png";
import img6 from "../assets/spidermen poster.png";
import img7 from "../assets/salaar posters.png";
import Dottedline from "../components/Dottedline";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Form from "../components/Form";
import Namelogo from "../assets/namelogo.svg"

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
            <div className="flex flex-col justify-center md:items-start md:mt-32 mt-36 md:px-36  items-center my-element">
              <div className="text-white  anton-font  text-center uppercase md:text-[150px] tracking-widest text-8xl">
                <h3 className="font-extrabold">avi</h3>
                <h3 className="font-extrabold">raj</h3>
                <p className="md:text-[22px] text-[15px] pt-4 text-[#ffe600] font-medium">
                  an fineart artist
                </p>
              </div>
              <div className="mt-10 md:pl-12 flex justify-center items-center gap-3 md:gap-5">
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
                  <CustomiseButtons
                  buttonimage={Whatsapp}
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
        <Dottedline  type={"about me"}></Dottedline>
        <div className="md:px-10  text-center mt-7 px-5.5 md:text-[25px] text-[16px] text-[#FFCDAD] tuffy-font  tracking-widest footer-element capitalize">
          <p className="text-justify">Hello, everyone ! My name is Aviraj Shilkar, and I am a passionate graphic designer and video editor. I love turning graphics into beautiful designs and transforming videos into engaging audiovisual art. I am committed to creating visually appealing and effective content that communicates ideas clearly and creatively.</p>
        </div>
        <Dottedline ide={"link1"} type={"my work"}></Dottedline>
        <Grid
          image1={img3} title1={"jbl"} descr1={"hoarding ad"}
          image2={img2} title2={"jbl"} descr2={"hoarding ad"}
          image3={img1} title3={"jbl"} descr3={"hoarding ad"}
          image4={img4} title4={"jbl"} descr4={"social media (insta post ad)"}
          image5={img5} title5={"jbl"} descr5={"website pop-up ad"}
          image6={img6} title6={"spiderman pavitr prabhakar"} descr6={"vector art"}
          image7={img7} title7={"salaar & kalki"} descr7={"poster design"}
        ></Grid>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Dottedline ide={"link2"} type={"contact"}></Dottedline>
        <Form placeholder1={"your name"}
              placeholder2={"your email"}
              placeholder3={"your message"}
        ></Form>
        <footer className="mt-10 bg-[#02589b] pt-10 footer-element">
          <h3 className="text-[#FFCDAD] anton-font  font-medium uppercase md:text-[30px] text-[20px] tracking-widest text-center mb-10">
            {" "}
            aviraj shilkar
          </h3>
          <div className="text-center pb-4">
            <p className="text-[#FFCDAD] capitalize md:text-[14.5px] text-[12.8px] tuffy-font flex justify-center items-center gap-2 tracking-wider">
              {/* &copy;all rights are reserved */}
              made with &hearts; by <a href="https://in.linkedin.com/in/abhiraj-shilkar-408126217"><img src={Namelogo} alt="" /></a>
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Home;
