import CustomiseButtons from "./CustomiseButtons";
function Body() {
  return (
    <>
      <div className=" flex justify-around items-center gap-7 mt-24  ">
        <div>
          <div className="text-[#000000] font-['Montserrat', 'sans-serif'] font-extrabold uppercase text-9xl tracking-tight">
            <h3>abhiraj</h3>
            <h3>shilkar</h3>
          </div>
          <CustomiseButtons link={"https://openai.com/index/chatgpt/"} buttonname="visit linkdin" className=""></CustomiseButtons>
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
