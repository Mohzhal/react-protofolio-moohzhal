import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Tutup menu setelah navigasi
  };

  return (
    <div className="flex justify-between z-50 fixed h-12 bg-[#243137] w-screen">
      <div className=" mt-2 text-[#bd9f67] ml-3 font-extrabold">ZXZZTech</div>
      <GiHamburgerMenu
        onClick={toggleMenu}
        className={`absolute sm:hidden cursor-pointer z-20 text-[#bd9f67] right-10 top-2 size-7 active:rotate-90 transition duration-300 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      />
      <div
        className={`flex flex-col xl:gap-14 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0 sm:gap-6 sm:h-2 sm:flex-row p-5 right-0 sm:space-y-0 space-y-20 h-screen w-28 transition duration-200 bg-[#243137] ${
          isOpen ? "translate-x-0" : "translate-x-28"
        }`}
      >
        <span
          onClick={() => scrollToSection("home")}
          className="text-[#bd9f67] text-center mt-14 sm:mt-0 font-bold cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => scrollToSection("about")}
          className="text-[#bd9f67] text-center mt-9 sm:mt-0 font-bold cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => scrollToSection("project")}
          className="text-[#bd9f67] text-center mt-9 sm:mt-0 font-bold cursor-pointer"
        >
          Project
        </span>
        <span
          onClick={() => scrollToSection("skill")}
          className="text-[#bd9f67] text-center mt-9 sm:mt-0 font-bold cursor-pointer"
        >
          Skill
        </span>
      </div>
    </div>
  );
};

export default Navbar;
