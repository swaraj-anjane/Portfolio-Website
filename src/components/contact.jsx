import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { sendEmail } from "../../src/ContactSection";
import { ImSpinner2 } from "react-icons/im";

import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiArrowRight,
} from "react-icons/hi";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "swarajanjane0@gmail.com",
    href: "mailto:swarajanjane0@gmail.com",
  },

  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Indore, India",
    href: null,
  },

  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 9685159617",
    href: "tel:+91XXXXXXXXXX",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/swaraj-anjane",
  },

  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swaraj-anjane/",
  },

  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const form = useRef();

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    setIsSubmitted(true);

    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            isInView ?
              {
                opacity: 1,
                y: 0,
              }
            : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea or internship opportunity? Let’s connect and
            build something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              isInView ?
                {
                  opacity: 1,
                  x: 0,
                }
              : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>

            <p className="text-gray-400 leading-8 mb-10">
              Feel free to reach out through any platform below. I usually
              respond quickly.
            </p>

            {/* Contact Cards */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={
                    isInView ?
                      {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                  }
                  transition={{
                    delay: index * 0.15,
                  }}>
                  {item.href ?
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition">
                      <div className="p-4 rounded-xl bg-cyan-500/10">
                        <item.icon size={22} color="#22d3ee" />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>

                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  : <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                      {" "}
                      <div className="p-4 rounded-xl bg-cyan-500/10">
                        <item.icon size={22} color="#22d3ee" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>

                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  }
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <h4 className="text-gray-400 mb-5">Connect on social</h4>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={
                      isInView ?
                        {
                          opacity: 1,
                          scale: 1,
                        }
                      : {}
                    }
                    transition={{
                      delay: 0.4 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 transition">
                    <social.icon size={22} color="#d1d5db" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              isInView ?
                {
                  opacity: 1,
                  x: 0,
                }
              : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="lg:col-span-3">
            <form
              ref={form}
              onSubmit={async e => {
                e.preventDefault();

                setIsSubmitting(true);

                await sendEmail(form);

                setIsSubmitting(false);

                setFormState({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Swaraj Anjane"
                    className="w-full px-5 py-4  rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400  text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="Swaraj@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 text-white placeholder:text-gray-500 resize-none"></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                }}
                whileTap={{
                  scale: isSubmitting ? 1 : 0.98,
                }}
                className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold flex items-center gap-2 hover:bg-cyan-400 transition disabled:opacity-50">
                {isSubmitting ?
                  <>
                    <ImSpinner2 className="animate-spin" size={20} />
                    Sending...
                  </>
                : <>
                    Send Message
                    <HiArrowRight size={20} />
                  </>
                }
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="text-green-400 text-sm">
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
