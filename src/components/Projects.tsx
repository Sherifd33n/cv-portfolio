import { useState, useEffect, useRef } from "react";
import picture from "../assets/picture-1.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section
      className="py-16 relative overflow-hidden bg-[#131022] min-h-screen">
      <div className="absolute inset-0 opacity-5 bg-[film-grain]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full lg:flex-row gap-[50px]">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <div className="">
            <p className="flex items-center gap-[5px] text-lg font-semibold text-[#3613e5] mb-1">
              <span className="h-0.5 w-[30px] bg-[#3713ec]"></span> PORTFOLIO
            </p>

            <h1 className="text-white text-[35px] font-semibold">
              Selected Works
            </h1>
          </div>

          <div className="flex flex-wrap gap-[30px]">
            <div className="w-full sm:w-[300px] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#1d1c27]">
              <img src={picture} alt="Project 1" className="rounded-lg mt-6" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  Netflix Clone{" "}
                </h2>
                <div className="flex justify-between items-center mt-2 border-t border-[#2b2839] pt-2 text-[#94a3b8] text-sm font-medium">
                  <a
                    href=""
                    className="bg-[#2b2839] px-3 py-1.5 rounded-md hover:text-[#2b2839] hover:bg-[#94a3b8]  duration-300 transition-all">
                    GitHub Repo
                  </a>
                  <a
                    href=""
                    className="text-[#2b2839] bg-[#94a3b8] px-3 py-1.5 rounded-md hover:text-[#94a3b8] hover:bg-[#2b2839]  duration-300 transition-all">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#1d1c27]">
              <img src={picture} alt="Project 1" className="rounded-lg mt-6" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  Netflix Clone{" "}
                </h2>
                <div className="flex justify-between items-center mt-2 border-t border-[#2b2839] pt-2 text-[#94a3b8] text-sm font-medium">
                  <a
                    href=""
                    className="bg-[#2b2839] px-3 py-1.5 rounded-md hover:text-[#2b2839] hover:bg-[#94a3b8]  duration-300 transition-all">
                    GitHub Repo
                  </a>
                  <a
                    href=""
                    className="text-[#2b2839] bg-[#94a3b8] px-3 py-1.5 rounded-md hover:text-[#94a3b8] hover:bg-[#2b2839]  duration-300 transition-all">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#1d1c27]">
              <img src={picture} alt="Project 1" className="rounded-lg mt-6" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  Netflix Clone{" "}
                </h2>
                <div className="flex justify-between items-center mt-2 border-t border-[#2b2839] pt-2 text-[#94a3b8] text-sm font-medium">
                  <a
                    href=""
                    className="bg-[#2b2839] px-3 py-1.5 rounded-md hover:text-[#2b2839] hover:bg-[#94a3b8]  duration-300 transition-all">
                    GitHub Repo
                  </a>
                  <a
                    href=""
                    className="text-[#2b2839] bg-[#94a3b8] px-3 py-1.5 rounded-md hover:text-[#94a3b8] hover:bg-[#2b2839]  duration-300 transition-all">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px]  rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#1d1c27]">
              <img src={picture} alt="Project 1" className="rounded-lg mt-6" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  Netflix Clone{" "}
                </h2>
                <div className="flex justify-between items-center mt-2 border-t border-[#2b2839] pt-2 text-[#94a3b8] text-sm font-medium">
                  <a
                    href=""
                    className="bg-[#2b2839] px-3 py-1.5 rounded-md hover:text-[#2b2839] hover:bg-[#94a3b8]  duration-300 transition-all">
                    GitHub Repo
                  </a>
                  <a
                    href=""
                    className="text-[#2b2839] bg-[#94a3b8] px-3 py-1.5 rounded-md hover:text-[#94a3b8] hover:bg-[#2b2839]  duration-300 transition-all">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
