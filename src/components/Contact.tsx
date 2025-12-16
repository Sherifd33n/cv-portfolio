import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const sectionRef = useRef<HTMLElement>(null);

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputClick = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      600
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzznlbdy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage({ type: "error", text: "Failed to send message." });
      }
    } catch (error) {
      console.error("Formspree error:", error);
      setStatusMessage({ type: "error", text: "Failed to send message." });
    }


    setTimeout(() => setStatusMessage(null), 4000);
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Sherifd33n", label: "GitHub" },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/jamiu-sherif",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      url: "https://twitter.com/Sherifd33n",
      label: "Twitter",
    },
  ];

  return (
    <section
      ref={sectionRef}
      data-section
      className="pt-10 relative overflow-hidden bg-[#131022] min-h-screen">
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7">
          <p className="flex items-center gap-[5px] text-sm text-[#3613e5] border border-[#3613e5] rounded-full px-3 py-1 mb-2 w-fit">
            <GoDotFill /> AVAILABLE FOR WORK
          </p>
          <p className="text-[30px] md:text-[35px] text-white font-semibold">
            Let's Build <span className="text-[#3613e5]">Together</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-lg font-mono font-semibold text-[#F5F3EF]/70 mb-2">
                  Name
                </label>
                <div className="relative overflow-hidden rounded">
                  {ripples.map((ripple) => (
                    <motion.div
                      key={ripple.id}
                      className="absolute w-2 h-2 bg-[#8B7355]/30 rounded-full pointer-events-none"
                      style={{ left: ripple.x, top: ripple.y }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 40, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  ))}
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onClick={handleInputClick}
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Your name..."
                    className="w-full bg-[#1d1c27] border border-[#F5F3EF]/10 rounded px-4 py-3 text-[#F5F3EF]/70 focus:border-[#6a667d] focus:outline-none transition-all duration-300 relative"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-lg font-mono font-semibold text-[#F5F3EF]/70 mb-2">
                  Email
                </label>
                <div className="relative overflow-hidden rounded">
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onClick={handleInputClick}
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Your email..."
                    className="w-full bg-[#1d1c27] border border-[#F5F3EF]/10 rounded px-4 py-3 text-[#F5F3EF]/70 focus:border-[#6a667d] focus:outline-none transition-all duration-300 relative"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-lg font-mono font-semibold text-[#F5F3EF]/70 mb-2">
                  Message
                </label>
                <div className="relative overflow-hidden rounded">
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onClick={handleInputClick}
                    whileFocus={{ scale: 1.01 }}
                    rows={5}
                    placeholder="Your message..."
                    className="w-full bg-[#1d1c27] border border-[#F5F3EF]/10 rounded px-4 py-3 text-[#F5F3EF]/70 focus:border-[#6a667d] focus:outline-none transition-all duration-300 relative resize-none"
                  />
                </div>
              </div>

              {statusMessage && (
                <p
                  className={`text-sm font-mono ${
                    statusMessage.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>
                  {statusMessage.text}
                </p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#3613e5] text-white rounded font-mono text-sm hover:bg-[#3613e5]/60 transition-colors duration-300 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="space-y-4 bg-gradient-to-tr from-[#1d1c27] via-[#1d1c27] to-[#1f1a3c] border border-[#F5F3EF]/10 rounded-lg p-[25px] mt-9">
              <p className="text-white text-base font-semibold">Contact Info</p>
              <div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}>
                  <div className="flex flex-col gap-3 text-[#F5F3EF]/80 hover:text-[#8B7355] duration-300">
                    <div className="flex items-center gap-4">
                      <div className="h-[50px] w-[50px] rounded-md flex items-center justify-center bg-[#131022]">
                        <MdMail className="w-5 h-5 text-[#3713ec]" />
                      </div>
                      <a href="mailto:jamiusherif578@gmail.com">
                        <p className="text-[13px] text-[#7e7b93]">Email me</p>
                        <span className="font-mono text-sm text-[#fefefe]">
                          jamiusherif578@gmail.com
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-[50px] w-[50px] rounded-md flex items-center justify-center bg-[#131022]">
                        <FaLocationDot className="w-5 h-5 text-[#3713ec]" />
                      </div>
                      <div>
                        <p className="text-[13px] text-[#7e7b93]">Location</p>
                        <span className="font-mono text-sm text-[#fefefe]">
                          Lagos, NG
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-[#7e7b93] mt-5 pt-4">
                <p className="text-white text-base font-semibold">Connect</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-4 py-2 border border-[#F5F3EF]/10 rounded hover:border-[#3713ec]/30 transition-colors duration-300"
                        aria-label={social.label}>
                        <Icon className="w-5 h-5 text-[#F5F3EF]/60 group-hover:text-[#3713ec] transition-colors duration-300" />
                        <span className="text-sm font-mono text-[#F5F3EF]/60 group-hover:text-[#3713ec] transition-colors duration-300">
                          {social.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 py-4 border-t border-[#F5F3EF]/10 text-center">
          <p className="text-sm font-mono text-[#F5F3EF]/40">
            © 2025 Sherifdeen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
