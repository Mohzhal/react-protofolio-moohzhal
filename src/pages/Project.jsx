import CardProject from "../components/CardProject"
import kwdw from "../assets/kwdw.png"
import tot from "../assets/tot.png"
import kas from "../assets/kas.png"
import fruit from "../assets/fruitot.png"

const Project = () => {
  return (
    <div id="project" className="h-screen  bg-[#243137]">
           <div className="text-[#bd9f67]  font-extrabold text-center w-28 bg-[#243137] shadow-black shadow-lg rounded-r-full sticky top-44 p-3 z-40">
          PROJECT
        </div>
  
        <div className="absolute left-24  -translate-y-12 h-screen w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67]"></div>
    
  <div className="flex items-center  xl:px-24 gap-2 xl:gap-10 bg-[#243137] justify-center xl:justify-end h-screen ">
  <CardProject title="Basreng KWDW" image={kwdw} link="https://github.com/Mohzhal/baksoGoreng" />
  <CardProject title="Integrasi Ai" image={tot} link="https://github.com/Mohzhal/TOT_ai" />
  </div>

  <div className="flex z-50 -mt-80  items-center  xl:px-24 gap-2 xl:gap-10 bg-[#243137] justify-center xl:justify-end h-screen ">
  <CardProject title="Kas Masjid" image={kas} link="https://github.com/Mohzhal/kas_Masjid" />
  <CardProject title="Fruitot" image={fruit} link="https://github.com/Mohzhal/landing_page_fruitot" />
  </div>

  <div className="absolute left-24 -translate-y-96 h-96 w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67] z-0"></div>
  
    </div>
  )
}

export default Project