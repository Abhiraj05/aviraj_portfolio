import React,{useState} from "react";
const Form = ({ placeholder1, placeholder2, placeholder3 }) => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return <>
          <div className="text-center mt-10 mb-10 md:px-10 px-4.5 my-element">
          <form  onSubmit={onSubmit}>
           
            <div className="mb-6">
              <input
                className="bg-[#4e4e4e] pl-3 w-85 h-12 placeholder:capitalize placeholder:tuffy-font placeholder:text-[#FFCDAD] rounded-sm focus:outline-[#FFCDAD] text-[#FFCDAD]  tuffy-font tracking-wide"
                type="text"
                placeholder={placeholder1}
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="bg-[#4e4e4e] pl-3 w-85 h-12 placeholder:capitalize placeholder:tuffy-font placeholder:text-[#FFCDAD] rounded-sm focus:outline-[#FFCDAD] text-[#FFCDAD]  tuffy-font tracking-wide"
                type="email"
                placeholder={placeholder2}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="bg-[#4a4949] pl-3 w-85 h-22 pt-2 resize-none  placeholder:capitalize placeholder:tuffy-font placeholder:text-[#FFCDAD] rounded-sm focus:outline-[#FFCDAD] text-[#FFCDAD]  tuffy-font tracking-wide"
                type="text"
                placeholder={placeholder3} 
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="border-[#FFCDAD]  text-[#FFCDAD] border-2 px-[109px] py-2 capitalize  tuffy-font  text-[16px] rounded-sm">
              send message
              </button>
            </div>
          </form>
          <div className="text-[#FFCDAD] mt-4">
               <span>{result}</span>
          </div>
        </div>
  </>;
};

export default Form;
