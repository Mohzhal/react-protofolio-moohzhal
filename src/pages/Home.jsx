const Home = () => {
    const word = "FRONTEND"
  return (
    <div className="h-screen bg-[#243137]  p-2 overflow-x-hidden">
  <div className="text-[#bd9f67] cursor-pointer xl:ml-80  xl:translate-y-[50px] translate-y-[70px] lg:translate-y-[60px] text-start justify-start sm:text-start sm:mx-9 sm:text-3xl sm:justify-start  font-extrabold mr-3 flex  space-x-1">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="text-[35px] md:text-7xl lg:text-8xl sm:text-5xl sm:-translate-y-3 transition-transform duration-300 transform hover:scale-150"
        >
          {letter}
        </span>
      ))}
    </div> 

    <div className="flex flex-col justify-center  relative w-full ">
  <div className="text-[#bd9f67] absolute md:left-44 lg:left-52 lg:translate-y-[200px] lg:text-5xl md:text-4xl translate-y-[155px] sm:translate-y-[210px] rotate-90 left-28 font-extrabold sm:w-60 sm:text-3xl text-lg sm:left-[145px] xl:left-[410px]">
    UI & UX Designer
  </div>
  <div className="text-[#bd9f67] absolute md:left-80 lg:left-[340px] lg:text-8xl translate-y-[150px] sm:translate-y-[115px] rotate-90 sm:left-[270px] sm:rotate-0 sm:text-6xl w-36 left-[165px] font-extrabold w-70 text-xl md:translate-y-28 md:text-7xl xl:left-[550px]">
    Database Architecture
  </div>
  <div className="absolute font-bold text-[18px] translate-y-[65px] sm:translate-y-[70px] left-40 sm:left-[230px] md:left-[245px] sm:text-5xl right-3 text-[#bd9f67] md:text-7xl md:translate-y-12 lg:text-8xl lg:translate-y-7 lg:left-[275px] xl:left-[480px]">
    MOOHZHAL
  </div>
</div>


    
   
   <div className=" translate-y-80 md:ml-36 lg:ml-56 mt-5 sm:ml-28 xl:ml-[500px] lg:translate-y-[340px] xl:translate-y-[295px] font-semibold cursor-pointer">
      <div className="text-[#bd9f67] sm:ml-32 hover:bg-white ml-6 w-44 lg:w-52 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200   lg:text-[20px] border-2 rounded-md p-1 text-center ">Based in Karawang</div>
      <div className="flex mt-3 gap-3 sm:gap-8 sm:ml-8" >
      <div className="text-[#bd9f67] hover:bg-white xl:-ml-10 w-44 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200   lg:text-[20px] border-2 rounded-md p-1 text-center ">Mahasiswa</div>
      <div className="text-[#bd9f67] hover:bg-white xl:ml-24 w-44 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200   lg:text-[20px] border-2 rounded-md p-1 text-center ">Engineering</div>
      </div>
      <div className="flex mt-3 gap-3 " >
      <div className="text-[#bd9f67] hover:bg-white  w-44 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200  xl:-ml-28  lg:text-[20px] border-2 rounded-md p-1 text-center ">S1</div>
      <div className="text-[#bd9f67] hover:bg-white  w-44 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200  xl:ml-20 lg:text-[20px] border-2 rounded-md p-1 text-center ">Teknik</div>
      <div className="text-[#bd9f67] hover:bg-white  w-44 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200  xl:ml-28 lg:text-[20px] border-2 rounded-md p-1 text-center ">Informatika</div>
      </div>
      <div className="sm:ml-36 xl:ml-16 text-[#bd9f67] hover:bg-white  mt-3 w-52 xl:w-96 lg:w-64 border-[#bd9f67] hover:scale-110 hover:-rotate-6 transition duration-200   lg:text-[20px] border-2 rounded-md p-1 text-center ">STTI Sony Sugema</div>
   </div>
       </div>
  )
}

export default Home