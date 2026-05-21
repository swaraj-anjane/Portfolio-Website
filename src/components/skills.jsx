import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFigma,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Modern responsive UI development",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    description: "Secure and scalable backend applications",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "REST API", icon: SiJavascript, color: "#06B6D4" },
      { name: "MVC", icon: SiJavascript, color: "#22C55E" },
    ],
  },

  {
    title: "Database & Authentication",
    description: "Database and authentication systems",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      // { name: "Mongoose", icon: SiMongodb, color: "#47A248" },
      { name: "JWT", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Multer", icon: SiJavascript, color: "#06B6D4" },
      { name: "Nodemailer", icon: SiJavascript, color: "#22C55E" },
    ],
  },

  {
    title: "Tools",
    description: "Development workflow and UI tools",
    skills: [
      { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="skills"
      className="relative pt-16 pb-24 sm:pt-20 sm:pb-32 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-cyan-400"></span>

            <span className="uppercase tracking-widest text-sm text-cyan-400 font-medium">
              Skills & Technologies
            </span>

            <span className="w-12 h-px bg-cyan-400"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            My Tech Stack
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Technologies I use to build scalable and modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className={`md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 min-h-[250px] flex flex-col hover:border-cyan-400/30 hover:bg-cyan-500/[0.04] transition-all duration-300 ${
                category.title === "Frontend" ? "md:col-span-2 lg:col-span-2"
                : category.title === "Tools" ? "md:col-span-2"
                : ""
              }`}>
              <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>

              <p className="text-gray-400 text-sm mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all">
                    <skill.icon
                      className="w-5 h-5"
                      style={{
                        color: skill.color,
                      }}
                    />

                    <span className="text-sm font-medium text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="mt-12 bg-gradient-to-br from-cyan-500/[0.03] to-emerald-500/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-1 ">Currently Learning</h4>

              <p className="text-gray-400 text-sm">
                Exploring modern technologies and improving full stack
                architecture skills
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "Performance Optimization",
                "Authentication",
                "State Management",
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm hover:border-cyan-400/40 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
