import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import hero_image from "../assets/hero_img.png";
import { BiLogoTypescript } from "react-icons/bi";

const Hero = () => {
  const [pixelOpacity, setPixelOpacity] = useState(1);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPixelOpacity(0);
    }, 1500);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      data-section
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-center md:text-left pt-[110px] md:pt-0">
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ddd9f6] via-white to-[#e7e2e2]/10" />
      </div>

      <div
        className="absolute inset-0 bg-dither-pattern transition-opacity "
        style={{ opacity: pixelOpacity }}
      />

      <div className="relative z-10 flex flex-col items-center justify-between max-w-5xl mx-auto px-6 w-full md:flex-row">
        <div
          className={`transition-all duration-1000 md:w-1/2 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
          <div className="flex gap-[5px] items-center justify-center md:justify-start">
            <p className="h-[2px] w-[35px] bg-[#3a37d6]"></p>
            <p className="text-[#3a37d6] font-bold">FRONTEND DEVELOPER</p>
          </div>
          <h1 className="text-[55px] font-semibold leading-[45px] my-[20px] bg-gradient-to-b from-[#0f172a] to-[#cbd1d8] bg-clip-text text-transparent">
            SHERIFDEEN <br /> DEV
          </h1>
          <p className="text-lg text-[#565758]">
            Architecting digital experiences with precision and code. Passionate
            about building accessible, pixel-perfect and performant web
            applications.
          </p>

          <button
            onClick={() => window.open("/sherifdeen.pdf")}
            className="bg-[#3713ec] px-4 py-3 rounded-lg flex items-center text-sm font-semibold text-white gap-1 cursor-pointer hover:opacity-50 duration-300 transition-all my-[20px] mx-auto md:mx-0">
            Resume <ArrowRight className="w-4" />
          </button>

          <div className="mt-[40px] md:mt-0">
            <p className="text-[#657b9b] font-semibold">WORKING WITH</p>

            <div className="mt-[16px] flex gap-[30px] flex-wrap justify-center md:justify-start">
              <p className="flex gap-[10px] items-center text-[#2a3142] font-semibold">
                <FaReact className="text-[#2763ac]" /> React
              </p>
              <p className="flex gap-[10px] items-center text-[#2a3142] font-semibold">
                <IoLogoJavascript className="text-[#f9da62]" /> JavaScript
              </p>
              <p className="flex gap-[10px] items-center text-[#2a3142] font-semibold">
                <RiTailwindCssFill className="text-[#6cdff1]" /> Tailwind
              </p>
              <p className="flex gap-[10px] items-center text-[#2a3142] font-semibold">
                <BiLogoTypescript className="text-[#6320df]" /> TypeScript
              </p>
            </div>
          </div>
        </div>

        <div
          className={`md:w-1/2 transition-all duration-1000 delay-500 mt-[20px] md:mt-0 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
          <img
            src={hero_image}
            alt=""
            className="w-full h-[400px] md:w-[700px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-film-grain " />
      </div>
    </section>
  );
};

export default Hero;
