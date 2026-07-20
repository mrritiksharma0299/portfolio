import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 lg:px-20 pt-28 bg-white"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-24 items-center">

      {/* Left Side */}
      <div className="flex flex-col gap-6">

          <p className="text-violet-600 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 transition-all duration-300 hover:text-violet-600 hover:tracking-wide cursor-default">
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

          <p className="text-lg text-gray-600 leading-9 max-w-xl transition-all duration-300 hover:text-gray-800">
            I build beautiful, scalable and responsive web applications
            using React, Django and Python. I enjoy turning ideas into
            modern digital experiences.
          </p>

          <div className="flex gap-5 p-0" >

          <button className="px-10 py-5 bg-violet-600 text-white rounded-full font-semibold shadow-lg hover:bg-violet-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Download Resume
          </button>

          <button className="px-10 py-5 border-2 border-violet-600 text-violet-600 rounded-full font-semibold hover:bg-violet-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
            View Projects
          </button>

          </div>


          <div className="flex gap-5">

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all duration-300 cursor-pointer">
              <FaGithub size={24} />
            </div>

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all duration-300 cursor-pointer">
              <FaLinkedin size={24} />
            </div>

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all duration-300 cursor-pointer">
              <FaEnvelope size={24} />
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-200 blur-3xl opacity-40"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Ritik Sharma"
                className="w-[520px] object-cover transition-all duration-500 hover:scale-105 hover:rotate-1"
                />
            </div>
          </div>
        </div>
    </section>
  );
}

export default Hero;
