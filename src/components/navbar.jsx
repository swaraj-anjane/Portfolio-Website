import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = href => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl bg-black/40 ${
        scrolled ?
          "backdrop-blur-2xl bg-black/40  py-3 shadow-[0_0_30px_rgba(6,182,212,0.08)]"
        : "bg-transparent py-2 md:py-5"
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={e => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 group">
            <span className="text-white text-xl font-light tracking-wide transition-all duration-500 group-hover:text-cyan-300">
              Swaraj
            </span>

            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.95)] group-hover:shadow-[0_0_28px_rgba(34,211,238,1)] transition-all duration-500" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileHover={{ y: -2 }}
                  className={` group relative text-sm tracking-wide font-light transition-all duration-500 ${
                    isActive ? "text-cyan-300" : (
                      "text-gray-400 hover:text-cyan-200"
                    )
                  }`}>
                  {link.name}

                  {/* Cyan Glow Underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] rounded-full bg-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(34,211,238,0.9)] ${
                      isActive ? "w-full opacity-100" : (
                        "w-0 opacity-0 group-hover:w-full"
                      )
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 35px rgba(34,211,238,0.6)",
            }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block px-6 py-2.5 rounded-full bg-cyan-400 text-black text-sm font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-500 hover:bg-cyan-300">
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2 rounded-lg border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            {isOpen ?
              <HiX className="w-6 h-6 text-cyan-300" />
            : <HiMenuAlt3 className="w-6 h-6 text-cyan-300" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="md:hidden mt-4 mx-4 rounded-3xl overflow-hidden backdrop-blur-2xl bg-black/50 border border-cyan-400/10 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
            <div className="p-5 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className={`block px-4 py-3 rounded-xl text-sm tracking-wide font-light transition-all duration-500 ${
                      isActive ?
                        "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      : "text-gray-400 hover:text-cyan-200 hover:bg-white/5"
                    }`}>
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                whileHover={{
                  scale: 1.03,
                }}
                className="block px-4 py-3 mt-4 rounded-xl bg-cyan-400 text-black text-center text-sm font-semibold shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500">
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
