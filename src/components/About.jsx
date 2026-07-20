import {
  FaUser,
  FaLocationDot,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa6";
import FadeUp from "../animations/FadeUp";

function About() {
  const infoCards = [
    {
      icon: <FaUser />,
      title: "Name",
      value: "Ritik Sharma",
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      value: "Himachal Pradesh, India",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mrritiksharma0299@gmail.com",
    },
    {
      icon: <FaBriefcase />,
      title: "Availability",
      value: "Open to Work",
    },
  ];

  return (
    <FadeUp>
    <section
      id="about"
      className="py-24 px-8 lg:px-20 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}

          <div>

            <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-violet-600"></span>
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Get To Know Me
            </h2>

          </div>

          {/* Right Side */}

          <div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-xl transition-colors duration-300">
              I am a Full Stack Developer with a strong foundation in
              modern web technologies. I enjoy building applications that
              solve real-world problems and create seamless user
              experiences.
            </p>

          </div>

        </div>

        {/* Information Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

          {infoCards.map((item, index) => (

            <div
              key={index}
              className="
                flex items-center gap-3
                px-4 py-4
                rounded-xl
                border
                border-gray-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-violet-500
              "
            >

              <div
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  bg-violet-100
                  dark:bg-violet-900/40
                  text-violet-600
                  dark:text-violet-400
                  text-lg
                  flex-shrink-0
                "
              >
                {item.icon}
              </div>

              <div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </h4>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
    </FadeUp>
  );
}

export default About;