import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Freelance & Personal Projects",
    location: "India",
    period: "2025 - Current",

    description:
      "Built full stack MERN applications with authentication, dashboards, Redux state management, and responsive UI design.",

    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },

  {
    title: "Frontend Developer",
    company: "Personal Learning",
    location: "Remote",
    period: "2023 - 2024",

    description:
      "Focused on modern frontend architecture, responsive UI systems, Tailwind CSS, and animation-driven interfaces.",

    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
];

const education = [
  {
    title: "B.Tech • Computer Science",
    company: "Malwa Institute of Science & Technology",
    location: "India",
    period: "2023 - 2027",

    description:
      "Learning computer science fundamentals, programming concepts, web technologies, and backend systems.",

    achievements: ["Web Development", "MERN Stack", "Frontend Projects"],
  },
];

export default function Experience() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="experience"
      className="relative py-24 bg-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Career Path
          </p>

          <h2 className="text-5xl font-bold mb-6">Experience & Education</h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My development journey, learning experience, and technical growth in
            MERN stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-cyan-500/10">
                <HiBriefcase size={30} color="#22d3ee" />
              </div>

              <h3 className="text-3xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  className="relative p-8 rounded-3xl border border-white/10 bg-white/5 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl hover:border-cyan-400/30 transition">
                  <div className="flex justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">{item.title}</h4>

                      <p className="text-cyan-400 mt-1">{item.company}</p>
                    </div>

                    <div className="min-w-[130px] h-[56px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 text-center">
                      {item.period}
                    </div>
                  </div>

                  <p className="text-gray-500 mb-2">{item.location}</p>

                  <p className="text-gray-400 leading-8 mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-emerald-500/10">
                <HiAcademicCap size={30} color="#34d399" />
              </div>

              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="space-y-8 ">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  className="relative p-8 rounded-3xl border border-white/10
                  bg-white/5 bg-gradient-to-br from-emerald-500/5 to-transparent
                  backdrop-blur-xl hover:border-emerald-400/30 transition">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">{item.title}</h4>

                      <p className="text-emerald-400 mt-1">{item.company}</p>
                    </div>

                    <div className="px-5 py-2 min-w-[110px] text-center rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                      {item.period}
                    </div>
                  </div>
                  <p className="text-gray-500 mb-2">{item.location}</p>
                  <p className="text-gray-400 leading-8 mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {item.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
