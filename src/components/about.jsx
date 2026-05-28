import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiGlobe } from "react-icons/hi";

const highlights = [
  { icon: HiCode, value: "1+", label: "Years Learning" },
  { icon: HiLightningBolt, value: "10+", label: "Projects Built" },
  { icon: HiGlobe, value: "100%", label: "Dedication" },
];

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />

              {/* Border */}
              <div className="absolute -inset-4 border border-white/10 rounded-3xl" />

              {/* Main Card */}
              <div className="relative h-full bg-cyan-500/[0.03] backdrop-blur-md border border-cyan-400/10 rounded-3xl p-8 flex flex-col justify-center transition-all duration-300 hover:bg-white/5 hover:border-white/10">
                {/* Profile */}
                <div className="space-y-6">
                  <img
                    src="/profile.jpg"
                    alt="Swaraj"
                    className="w-24 h-24 rounded-2xl object-cover border border-white/10"
                  />

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Swaraj Anjane
                    </h3>

                    <p className="text-gray-400 text-lg">
                      MERN Stack Developer
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

                    <span>Based in India</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {" "}
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.3 + index * 0.1,
                      }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5">
                      <item.icon className="w-6 h-6 mx-auto mb-3 text-cyan-400" />

                      <div className="text-xl font-bold text-white">
                        {item.value}
                      </div>

                      <div className="text-sm text-gray-400 mt-1">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-px bg-cyan-400"></span>

              <span className="uppercase tracking-widest text-sm text-cyan-400 font-medium">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight">
              Crafting digital experiences with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                passion & precision
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                I’m a passionate MERN Stack Developer focused on building
                scalable and modern web applications with clean UI and strong
                backend architecture.
              </p>

              <p>
                I work with React.js, Redux Toolkit, Tailwind CSS, Node.js,
                Express.js, MongoDB, JWT Authentication, Multer, and Nodemailer.
              </p>

              <p>
                I enjoy solving real-world problems, learning modern
                technologies, and continuously improving my frontend and backend
                development skills.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solver",
                "Fast Learner",
                "Team Player",
                "Clean Code",
                "Responsive Design",
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.1,
                  }}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5">
                  {" "}
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
