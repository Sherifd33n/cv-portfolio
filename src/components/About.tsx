import { useEffect, useRef, useState } from "react";
import hero_image from "../assets/hero_img.png";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsGlobe2 } from "react-icons/bs";
import { PiBagSimple } from "react-icons/pi";

const About = () => {
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
      className="py-24 relative overflow-hidden bg-[#131022] min-h-screen">
      <div className="absolute inset-0 opacity-5 bg-[film-grain]" />

      <div className="relative z-10 flex flex-col items-center justify-between max-w-5xl mx-auto px-6 w-full lg:flex-row">
        <div
          className={`transition-all duration-1000 lg:w-1/2 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <p className="flex items-center gap-[5px] text-sm text-[#3613e5] border border-[#3613e5] rounded-full px-3 py-1 mb-6 w-fit">
            <GoDotFill className="" /> AVAILABLE FOR HIRE
          </p>

          <h1 className="text-white text-[35px] md:text-[40px] lg:text-[50px] font-semibold leading-[50px]">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-[#3613e5] to-[#b87dfb] bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Matter.
          </h1>
          <p className="text-[#61687c] my-[20px] font-medium">
            I am a passionate Frontend Developer with a knack for creating
            immersive digital interfaces. My journey began with a curiosity for
            how things work on the web, and evolved into a career of solving
            complex problems with clean, efficient code.
          </p>

          <div className="mt-6 flex gap-[20px] flex-wrap items-center">
            <p className="flex items-center gap-[6px] font-medium">
              <CiLocationOn className="text-[#3613e5]" size={20} /> Lagos, NG
            </p>
            <p className="flex items-center gap-[6px] font-medium">
              <BsGlobe2 className="text-[#3613e5]" size={20} /> English
            </p>
            <p className="flex items-center gap-[6px] font-medium">
              <PiBagSimple className="text-[#3613e5]" size={20} />{" "}
              Freelance/Full-Time
            </p>
          </div>
        </div>

        <div
          className={`lg:w-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <img
            src={hero_image}
            alt=""
            className="shadow-xl shadow-blue-500/10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
