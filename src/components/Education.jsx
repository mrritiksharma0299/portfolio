import { FaGraduationCap } from "react-icons/fa";
import FadeUp from "../utils/FadeUp";

function Education() {
  return (
    <FadeUp>
    <section
      id="education"
      className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-600"></span>
            Education
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Academic Journey
          </h2>

        </div>

        {/* Education Card */}

        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-2xl
            p-6 md:p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >

          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

            {/* Left Side */}

            <div className="flex gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-violet-100
                  dark:bg-violet-900/30
                  text-violet-600
                  flex
                  items-center
                  justify-center
                  text-2xl
                  flex-shrink-0
                "
              >
                <FaGraduationCap />
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  B.Sc. Graphics & Web Designing
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                  Bachelor of Science
                </p>

                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                  Throughout my three-year bachelor's program, I developed a
                  strong foundation in graphic design and modern web
                  development. I learned to design visually appealing user
                  interfaces, build responsive websites, and combine creativity
                  with technical skills to create engaging digital experiences
                  using industry-standard tools and technologies.
                </p>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex lg:flex-col items-start lg:items-end gap-3 shrink-0">

              <p className="text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                2023 – 2026
              </p>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-violet-50
                  dark:bg-violet-900/30
                  text-violet-700
                  dark:text-violet-300
                  text-xs
                  font-semibold
                "
              >
                3 Years
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
    </FadeUp>
  );
}

export default Education;