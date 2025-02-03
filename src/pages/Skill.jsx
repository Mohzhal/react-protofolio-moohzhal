import { CardSkills } from "../components/CardSkills.jsx"; 

const Skill = () => {
  return (
    <div id="skill" className="h-screen bg-[#243137] mt-96 lg:mt-72 overflow-x-hidden"> 
      <div className="absolute left-24 h-screen w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67]"></div>

      <div className="text-[#bd9f67] font-extrabold text-center w-28 bg-[#243137] 
          shadow-black shadow-lg rounded-r-full sticky top-44 p-3 z-50">
        Skill
      </div>

      <CardSkills />
    </div>
  );
};

export default Skill;
