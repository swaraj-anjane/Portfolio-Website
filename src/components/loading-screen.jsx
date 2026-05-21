
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  const loadingBarVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center overflow-hidden">
          {/* Ambient Background Glows */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] -translate-x-1/2"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-[120px]"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 0.95, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          {/* Content Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center space-y-8"
            initial="hidden"
            animate="visible">
            {/* Logo Title */}
            <motion.div
              variants={textVariants}
              className="flex items-baseline gap-1.5">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Swaraj
              </h1>
              <motion.span
                variants={dotVariants}
                className="inline-block w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4,0_0_40px_rgba(6,182,212,0.3)]"
              />
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
              className="relative w-48 h-0.5 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              <motion.div
                variants={loadingBarVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent rounded-full origin-left"
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cyan-400/20 via-transparent to-transparent rounded-full blur-sm"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              variants={subtextVariants}
              className="flex flex-col items-center gap-2">
              <p className="text-xs md:text-sm tracking-widest uppercase font-light text-gray-400">
                Initializing
              </p>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-1 h-1 bg-cyan-400/60 rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
