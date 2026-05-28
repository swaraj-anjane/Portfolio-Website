import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import ecommerceImg from "../assets/projects/ecommerce.png";
import studentImg from "../assets/projects/student.png";
import portfolioImg from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Full stack MERN e-commerce platform with authentication, cart, admin dashboard, product filtering, and secure checkout.",

    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],

    github: "https://github.com/swaraj-anjane/E-commerce-Development",

    live: "https://e-commerce-development.vercel.app",

    featured: true,

    image: ecommerceImg,
  },

  {
    title: "Student Management System",

    description:
      "MERN application for managing students, attendance, courses, and admin operations with authentication system.",

    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],

    github:
      "https://github.com/swaraj-anjane/Student-Managment-System-Frontend",

    live: "https://student-managment-system-frontend.vercel.app/login",

    featured: true,

    image: studentImg,
  },


];

export default function Projects() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="projects"
      className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Real world MERN stack applications focused on clean UI, backend
            architecture, and user experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-28">
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className={`grid lg:grid-cols-2 gap-14 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}>
                {/* Image */}
                <div
                  className={`relative group ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}>
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

                  {/* Image Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
                    Featured Project
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 text-lg mb-8">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300 transition">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-8">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition text-lg">
                      <FaGithub />
                      Source Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-lg">
                      <HiExternalLink />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Small Projects */}
        
      </div>
    </section>
  );
}
