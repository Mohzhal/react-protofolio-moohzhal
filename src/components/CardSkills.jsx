import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.svg";
import nginx from "../assets/nginx.svg";
import python from "../assets/python.png";
import sass from "../assets/sass.png";
import tailwindcss from "../assets/tailwindcss.svg";

const skills = [
  { name: "Figma", logo: figma },
  { name: "Tailwind", logo: tailwindcss },
  { name: "CSS", logo: css },
  { name: "HTML", logo: html },
  { name: "JavaScript", logo: javascript },
  { name: "Nginx", logo: nginx },
  { name: "Python", logo: python },
  { name: "SASS", logo: sass },
  { name: "Bootstrap", logo: bootstrap },
];

export const CardSkills = () => {  // Perbaiki nama fungsi
  return (
    <div>
      <div className="grid grid-cols-2  sm:grid-cols-3 sm:p-6 p-2 gap-y-4 lg:grid-cols-4 xl:grid-cols-3 xl:pl-[450px] xl:gap-6 xl:translate-y-48 md:pl-32 gap-2 translate-y-80 justify-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-white hover:shadow-white hover:shadow-md shadow-cyan-300 sm:gap-4 flex flex-col sm:flex-row items-center group cursor-pointer p-3 h-12 border-2 hover:-rotate-3 rounded-md transition ease-in hover:scale-110 duration-300 hover:border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400"
          >
            <img
              className="w-6 grayscale duration-300 group-hover:grayscale-0 group-hover:scale-125 transition"
              src={skill.logo}
              alt={skill.name}
            />
            <h1 className="text-white hidden sm:block group-hover:block duration-300 font-mono group-hover:scale-110 text-sm font-semibold transition ease-in">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
