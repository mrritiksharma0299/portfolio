import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 lg:px-20 pt-28 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >

          <p className="text-violet-600 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white transition-all duration-300 hover:text-violet-600 hover:tracking-wide cursor-default">
            Ritik
            <br />
            Sharma
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Python Developer",
              2000,
              "React Developer",
              2000,
              "Django Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-xl md:text-3xl font-semibold text-violet-600 h-10"
          />

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-9 max-w-xl transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
            I build beautiful, scalable and responsive web applications
            using React, Django and Python. I enjoy turning ideas into
            modern digital experiences.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 flex-wrap">

            <a
              href="/resume.pdf"
              download
              className="px-10 py-5 bg-violet-600 text-white rounded-full font-semibold shadow-lg hover:bg-violet-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-10 py-5 border-2 border-violet-600 text-violet-600 dark:text-violet-400 rounded-full font-semibold hover:bg-violet-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5">

            <a
              href="https://github.com/mrritiksharma0299"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/ritik-sharma-008b262b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:mrritiksharma0299@gmail.com"
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >

          <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-300 dark:bg-violet-700 blur-3xl opacity-30"></div>

          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl dark:shadow-violet-900/40">

            <img
              src="/images/hero.png"
              alt="Ritik Sharma"
              className="w-[520px] object-cover transition-all duration-500 hover:scale-105 hover:rotate-1"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;