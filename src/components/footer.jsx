import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Swaraj Anjane</h2>

            <p className="text-gray-400 max-w-md">
              MERN Stack Developer focused on building modern full stack web
              applications with premium UI and scalable backend systems.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/swaraj-anjane"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition transition-all duration-300 hover:-translate-y-0.5">
              <FaGithub size={20} color="#d1d5db" />
            </a>

            <a
              href="https://www.linkedin.com/in/swaraj-anjane/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition transition-all duration-300 hover:-translate-y-0.5">
              <FaLinkedin size={20} color="#d1d5db" />
            </a>

            <a
              href="https://x.com/Swaraj_anjane"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition   transition-all duration-300 hover:-translate-y-0.5">
              <FaTwitter size={20} color="#d1d5db" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © 2026 Swaraj Anjane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
