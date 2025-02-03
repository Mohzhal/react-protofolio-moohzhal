import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./components/Cards";
import About from "./pages/About";
import Achievment from "./pages/Achievment";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNetworkSpeedDelay = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        switch (connection.effectiveType) {
          case "4g":
            return 4000;
          case "3g":
            return 6000;
          case "2g":
            return 8000;
          default:
            return 10000;
        }
      }
      return 2000;
    };

    const loadingDelay = getNetworkSpeedDelay();
    setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="app-container opacity-0 transition-opacity duration-1000 opacity-100">
      <div className="h-screen w-[4px] sm:w-[10px] xl:w-7 xl:left-[280px] sm:left-[105px] bg-[#bd9f67] absolute left-24"></div>
      <Navbar />
      <Cards />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="achiv">
        <Achievment />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
