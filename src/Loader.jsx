import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to remove the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader will fade out after 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div
      className={`h-screen bg-[#243137] flex justify-center items-center w-full transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
      <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]">
      </span>
    </div>
    </div>
  );
};

export default Loader;
