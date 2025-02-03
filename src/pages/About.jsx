const About = () => {
    return (
      <div className="h-screen bg-[#243137] ">
        <div className="text-[#bd9f67] font-extrabold text-center w-28 bg-[#243137] shadow-black shadow-lg rounded-r-full sticky top-44 p-3 z-40">
          ABOUT
        </div>
  
        <div className="absolute left-24  -translate-y-12 h-screen w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67]"></div>
  
      <div className="flex flex-col sm:translate-y-1/2 md:ml-60 sm:ml-56  translate-y-72 px-2 md:px-6  lg:ml-80 xl:ml-[450px] xl:pr-60 justify-center">
        <div className="font-bold text-xl sm:text-4xl text-white ">HELLO !!!</div>
        <p className="text-white font-bold sm:text-lg  text-sm">Muhammad Rizal</p>
        <p className="text-white text-sm font-bold sm:text-lg ">Informathics Engineering</p>
        <div className=" text-[10px] mt-1 text-white sm:text-[12px]  text-justify  text-lg">
        I was born on February 18, 2004, and I am currently pursuing my studies in Informatics Engineering at STTI Sony Sugema.
I have a strong passion for technology and creativity, which drives my aspiration to become a Full-Stack Developer and UI/UX Designer.
Thank you for visiting my profile!
        </div>
        
      </div>
      <div className="sm:flex hidden gap-5 sm:translate-y-32 sm:justify-center ">
      <div className="bg-[#243137] shadow-md hover:scale-110 active:scale-95 cursor-pointer shadow-black p-2 rounded-md stroke-2">
  <a href="https://wa.me/6285179718031?text=Saya%20Butuh%20Jasa%20Ui/Ux%20Anda" target="_blank"  className="text-[#bd9f67]">
    You need a Ui/Ux
  </a>
</div>

<div className="bg-[#243137] shadow-md hover:scale-110 active:scale-95 cursor-pointer shadow-black p-2 rounded-md stroke-2">
  <a href="https://wa.me/6285179718031?text=Saya%20Butuh%20Jasa%20Frontend%20Anda" target="_blank" className="text-[#bd9f67]" >
    You need a Frontend
  </a>
</div>

        
      </div>
      </div>
    );
  };
  
  export default About;
  