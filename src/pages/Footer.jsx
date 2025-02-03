import { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const templateParams = {
        user_email: email,
      };
  
      emailjs.send(
        "service_c18vxtz", // Ganti dengan Service ID Anda
        "template_x279emr", // Ganti dengan Template ID Anda
        templateParams,
        "hbS-KOTM0z0T8tdZv" // Ganti dengan User ID Anda
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Subscription successful!");
        setEmail("");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to subscribe. Please try again.");
      });
    };
  
  return (
    <div className="h-screen relative bg-[#243137] ">
<div className=" translate-y-16 text-center text-white font-extrabold font-sans text-xl">FOOTER</div>
    
    <div className="w-[160px] sm:w-[210px] sm:translate-y-24 xl:translate-y-36 xl:h-[300px]   xl:translate-x-32 xl:w-[330px] rounded-md border-4 h-[208px] sm:h-[275px] translate-x-4  translate-y-[88px]"></div>
    <div className="h-72  p-5 absolute  w-full">

        <div className="flex items-center justify-between sm:justify-center sm:pl-16 xl:gap-24   gap-16">
            <div className="text-white  sm:w-32  sm:-translate-y-32 xl:w-56   translate-y-24 sm:pl-40 xl:pl-0 xl:translate-x-20   ">
                <h1 className=" text-[8px] xl:text-xl sm:text-lg sm:font-bold">Muhammad Rizal</h1>
                <p className="text-[8px] xl:text-sm">Informathics Engineering</p>
                <div className="space-y-2 mt-1  ">
                <div className="font-bold text-[8px] sm:text-[13px] hover:text-gray-600 hover:scale-110">
  <a href="#home">HOME</a>
</div>
<div className="font-bold text-[8px] sm:text-[13px] hover:text-gray-600 hover:scale-110">
  <a href="#about">ABOUT</a>
</div>
<div className="font-bold text-[8px] sm:text-[13px] hover:text-gray-600 hover:scale-110">
  <a href="#project">PROJECT</a>
</div>
<div className="font-bold text-[8px] sm:text-[13px] hover:text-gray-600 hover:scale-110">
  <a href="#skill">SKILL</a>
</div>

                </div>
                </div>
            <div className="text-white translate-y-24  sm:-translate-y-32 ">
                <div className="font-bold text-xl">LOCATION</div>
                <p className="text-[9px] sm:text-sm">Dsn.Sumur Selang Ds.Cimahi Kec.Klari  </p>
                <div className="font-bold">EMAIL</div>
                <p className="text-[9px] sm:text-sm">rizal180204@gmail.com</p>
                <div className="font-bold">PHONE</div>
                <p className="text-[9px] sm:text-sm">+6285179718031</p>
            </div>
        </div>
    </div>
    <div className="absolute bottom-24 w-full flex flex-col items-center justify-center">
      <div className="text-white font-extrabold text-2xl">SUBSCRIBE</div>
      <div className="text-white text-[9px]">Enter Your Email to get notified about our new solutions</div>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-700 p-1 rounded-md mt-2">
        <input
          type="email"
          className="rounded-md p-2 w-44 bg-gray-800 text-white outline-none"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
        >
          <span role="img" aria-label="email">📩</span>
        </button>
      </form>
    </div>
    <div className="h-16 bg-black bottom-0 absolute w-full text-white flex items-center justify-center font-thin text-sm">@Copyright 2022 MoohZhal</div>
    </div>
    
    
  )
}

export default Footer