import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
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
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full lg:flex-row gap-[50px]">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold mb-10 md:mx-[10%] lg:mx-[15%]">
          My Journey
        </motion.h2>

        <div
          className={`flex flex-col gap-[30px] transition-all duration-1000  border-l pl-[30px] md:pl-[60px] border-[#3f3b54] md:mx-[10%] lg:mx-[15%] ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <div>
            <span className="text-[#3713ec] text-[12px] font-medium bg-[#1a133a] px-3 py-1 rounded-lg">
              2025 -
            </span>
            <p className="text-lg text-white font-semibold mt-4">
              Junior Frontend Developer
            </p>
            <p className="text-[#aeb5c2] my-2 text-base font-medium">
              KidsTech Africa
            </p>

            <p className="text-base text-[#8997ab]">
              {" "}
              Contributed to building the frontend using React.js and Tailwind
              CSS. And also participated in building the responsive layouts and
              user interface components.
            </p>
          </div>

          <div>
            <span className="text-[#3713ec] text-[12px] font-medium bg-[#1a133a] px-3 py-1 rounded-lg">
              2024 - 2025
            </span>
            <p className="text-lg text-white font-semibold mt-4">
              Frontend Development Internship
            </p>
            <p className="text-[#aeb5c2] my-2 text-base font-medium">
              Jointabs
            </p>

            <p className="text-base text-[#8997ab]">
              {" "}
              Implemented the UI of some pages including the Sign-in, Sign-up,
              and Terms & conditions pages and also creating some components
              which include search filter, tabs and accordion while using
              Next.js and Tailwind CSS.
            </p>
          </div>

          <div>
            <span className="text-[#3713ec] text-[12px] font-medium bg-[#1a133a] px-3 py-1 rounded-lg">
              2021 - 2025
            </span>
            <p className="text-lg text-white font-semibold mt-4">
              BSc Mathematics
            </p>
            <p className="text-[#aeb5c2] my-2 text-base font-medium">
              University of Ilorin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
