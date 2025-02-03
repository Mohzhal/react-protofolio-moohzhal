import reactImg from "../assets/react.png"; 
import feImg from "../assets/fe.png";
import webImg from "../assets/web.png";
import jsImg from "../assets/js.png";
import apiImg from "../assets/api.png";
import js2Img from "../assets/js2.png";
import ngrokImg from "../assets/ngrok.png";
import ciscoImg from "../assets/cisco.png";
import Shapes from "../components/Shapes";
import { useState } from "react";

const images = [
  { id: "react", src: reactImg },
  { id: "fe", src: feImg },
  { id: "web", src: webImg },
  { id: "js", src: jsImg },
  { id: "api", src: apiImg },
  { id: "js2", src: js2Img },
  { id: "ngrok", src: ngrokImg },
  { id: "cisco", src: ciscoImg },
];


const Achievment = () => {
    const [hovered, setHovered] = useState(null);
  return (
    <div className="h-[720px] md:h-[1020px] lg:h-[1500px] sm:h-screen bg-[#243137] overflow-hidden">
      <div className="absolute left-24   h-screen w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67]"></div>
      <div className="bg-[#bd9f67] md:h-[800px] lg:h-[1070px] z-40 p-4 h-[900px] sm:h-screen translate-y-10 border-t-4 border-white   relative">
       <Shapes />
       <h1 className="text-white font-semibold text-center text-2xl translate-y-1">Achievement</h1>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:translate-y-2 lg:p-2   gap-2 lg:translate-y-2  translate-y-16">
        {images.map((image) => (
          <div
            key={image.id}
            className={`bg-white cursor-pointer p-2 rounded-md shadow-md transition-all duration-500 flex justify-center items-center ${
              hovered === image.id
                ? "scale-110 z-10"
                : hovered
                ? "blur-sm"
                : ""
            }`}
            onMouseEnter={() => setHovered(image.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={image.src} alt={image.id} className=" object-contain" />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Achievment