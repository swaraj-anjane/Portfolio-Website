import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/swaraj-anjane", label: "GitHub" },
  {
    icon: FaLinkedin, href: "https://www.linkedin.com/in/swaraj-anjane/", label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];




export default function Hero() {
  const handleScroll = href => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

          <span className="text-sm text-gray-300">
            Available for opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          <span className="block">Hi, I'm Swaraj</span>

          <span className="block mt-3 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-400 text-lg sm:text-xl leading-relaxed mt-8">
          I build scalable full stack web applications with modern UI,
          responsive frontend architecture, and secure backend systems using
          React, Node.js, Express, and MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#projects")}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl flex items-center gap-2 transition-all">
            View My Work
            <HiArrowDown className="text-lg" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-cyan-400/40 transition-all">
            <HiOutlineDocumentDownload className="text-lg" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-5 mt-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition-all">
              <social.icon className="text-xl text-white" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
