import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuCodeXml } from "react-icons/lu";
import { TbAlignBoxRightTopFilled, TbBrandNextjs } from "react-icons/tb";
import LanguagesComponent from "./LanguageComponent";
import { IoGitBranch, IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDropbox, FaReact } from "react-icons/fa";
import FrameWorkComponent from "./FrameWorkComponent";
import { IoIosColorPalette } from "react-icons/io";
import StylingComponent from "./StylingComponent";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPaintbrush } from "react-icons/fa6";
import { SiPostman, SiVercel, SiVitess } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
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
      className="py-10 relative overflow-hidden bg-[#131022] min-h-screen">
      <div className="absolute inset-0 opacity-5 bg-[film-grain]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full lg:flex-row gap-[50px] lg:text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <div className="">
            <p className="flex items-center lg:mx-auto gap-[5px] text-sm text-[#3613e5] border border-[#3613e5] rounded-full px-3 py-1 mb-6 w-fit">
              <GoDotFill className="" /> MY TECHNICAL ARSENAL
            </p>

            <h1 className="text-white text-[36px] font-semibold leading-[50px] lg:mx-[15%]">
              Creating Digital Experiences With{" "}
              <span className="bg-gradient-to-r from-[#3613e5] to-[#b87dfb] bg-clip-text text-transparent">
                Modern Tools.{" "}
              </span>
            </h1>
            <p className="text-[#61687c] my-[10px] font-medium lg:mx-[20%]">
              A curated list of languages, frameworks, and tools I use to build
              scalable and efficient web applications.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-8">
              <p className="flex gap-4 items-center text-2xl font-semibold">
                <TbAlignBoxRightTopFilled
                  size={22}
                  className="text-[#1f11a5]"
                />
                Core Languages
              </p>

              <p className="bg-[#2b2839] h-[2px] w-[600px] mt-2 flex flex-1"></p>
            </div>

            <div className="mt-[30px] flex flex-wrap gap-[20px] justify-start">
              <LanguagesComponent
                icon={LuCodeXml}
                text1="HTML5 & CSS3"
                text2="Core technologies"
                text3="Form the foundation of frontend development, enabling developers to create structured,  and responsive user interfaces."
                style1={"bg-gradient-to-r from-[#c64c43] to-[#3b4dcf]"}
                style2={"border-[#86402e] bg-[#31202d]"}
                style3={"text-[#e24c26]"}
              />

              <LanguagesComponent
                icon={IoLogoJavascript}
                text1="JavaScript (ES6+)"
                text2="Interactivity"
                text3="The engine of interactivity on the web, turning static pages into responsive, user-friendly experiences."
                style1={"bg-[#f0db4f]"}
                style2={"border-[#999058] bg-[#322e31]"}
                style3={"text-[#f0db4f]"}
              />

              <LanguagesComponent
                icon={BiLogoTypescript}
                text1="TypeScript"
                text2="Typed-JavaScript"
                text3="TypeScript combines the flexibility of JavaScript with the safety and reliability of a statically typed language."
                style1={"bg-[#443c8a]"}
                style2={"border-[#443c8a] bg-[#322e31]"}
                style3={"text-[#0079ca]"}
              />
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="flex items-center gap-8">
              <p className="flex gap-4 items-center text-2xl font-semibold">
                <FaDropbox size={25} className="text-[#1f11a5]" />
                Frameworks
              </p>

              <p className="bg-[#2b2839] h-[2px] w-[600px] mt-2 flex flex-1"></p>
            </div>

            <div className="mt-[30px] flex gap-[40px] flex-wrap">
              <FrameWorkComponent
                icon={FaReact}
                text1="React"
                text2="CORE"
                text4="HOOKS"
                text3="JavaScript library for building fast, interactive, and reusable user interfaces."
                style1={"bg-[#242e43]"}
                style2={"border-[#477986] bg-[#322e31]"}
                style3={"text-[#60d7f8]"}
                style4="text-[#60d7f8] px-[7px] py-[4px] bg-[#242e43] rounded"
                style5="text-[#9d99b5] bg-[#2b2839] px-[7px] py-[4px] rounded"
              />

              <FrameWorkComponent
                icon={TbBrandNextjs}
                text1="Next.js"
                text2="SSR"
                text4="APP ROUTER"
                text3="Enhances React by adding built-in routing, rendering, and performance optimizations."
                style1={"bg-[#242e43]"}
                style2={"border-[#73717c] bg-[#322e31]"}
                style3={"text-white"}
                style4="text-[#fff] px-[7px] py-[4px] bg-[#242e43] rounded"
                style5="text-[#9d99b5] bg-[#2b2839] px-[7px] py-[4px] rounded"
              />
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="flex items-center gap-8">
              <p className="flex gap-4 items-center text-2xl font-semibold">
                <IoIosColorPalette size={25} className="text-[#1f11a5]" />
                Styling & Tools
              </p>

              <p className="bg-[#2b2839] h-[2px] w-[600px] mt-2 flex flex-1"></p>
            </div>

            <div className="mt-[30px] flex gap-[40px] flex-wrap">
              <StylingComponent
                icon={RiTailwindCssFill}
                text="Tailwind CSS"
                style2="text-[#38b2ac]"
                style1="bg-[#202a3b]"
              />

              <StylingComponent
                icon={FaPaintbrush}
                text="Sass / SCSS"
                style2="text-[#cc6699]"
                style1="bg-[#2f2239]"
              />

              <StylingComponent
                icon={VscVscode}
                text="VsCode"
                style2="text-[#60d7f8]"
                style1="bg-[#000]"
              />

              <StylingComponent
                icon={IoGitBranch}
                text="Git & GitHub"
                style2="text-[#f97316]"
                style1="bg-[#33242b]"
              />

              <StylingComponent
                icon={SiVitess}
                text="Vite"
                style2="text-[#a855f7]"
                style1="bg-[#2b2142]"
              />

              <StylingComponent
                icon={SiPostman}
                text="Postman"
                style2="text-[#f97316]"
                style1="bg-[#33242b]"
              />

              <StylingComponent
                icon={SiVercel}
                text="Vercel"
                style2="text-[#fff]"
                style1="bg-[#000]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
