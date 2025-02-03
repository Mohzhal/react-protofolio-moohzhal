const CardProject = ({ title, link, image }) => {
  return (
    <div 
      className="cursor-pointer group w-80 h-72 hover:shadow-xl hover:shadow-white relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-24 before:rounded-t-2xl before:bg-cover before:bg-center before:transition-all before:duration-500 before:hover:h-44 before:hover:rounded-b-2xl before:hover:scale-95"
      style={{
        "--bg-url": `url(${image})`
      }}
    >
      {/* Background Image via Tailwind + CSS Variable */}
      <style>
        {`
          .group::before {
            background-image: var(--bg-url);
          }
        `}
      </style>

      <div className="w-28 h-28 bg-[#243137] mt-8 rounded-full hover:shadow-md hover:shadow-white border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500" />
      
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
        <p className="font-bold">{title}</p>
      </div>

      <a className="bg-[#243137] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:[#243137]" href={link}>
        Source Code
      </a>
    </div>
  );
};

export default CardProject;
