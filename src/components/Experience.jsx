import { FaBriefcase } from "react-icons/fa";
import FadeUp from "../utils/FadeUp";

function Experience() {
  return (
    <FadeUp>
    <section
      id="experience"
      className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-600"></span>
            Experience
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Internship
          </h2>

        </div>

        {/* Card */}

        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-2xl
            p-6
            md:p-8
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
          "
        >

          <div className="flex flex-col md:flex-row md:justify-between gap-8">

            {/* Left */}

            <div className="flex gap-4 flex-1">

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
                <FaBriefcase />
              </div>

              <div className="min-w-0">

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Python Developer Intern
                  </h3>

                  <span
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-violet-100
                      dark:bg-violet-900/30
                      text-violet-700
                      dark:text-violet-300
                      text-sm
                      font-medium
                    "
                  >
                    Unpaid
                  </span>

                </div>

                <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                  Noahnactor Private Limited
                </p>

                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                  Worked on real-world projects using Python, Django and
                  MySQL, improving problem-solving and backend development
                  skills while collaborating on practical backend
                  applications.
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex md:flex-col items-start md:items-end gap-3">

              <p className="text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                Jan 2024 – Mar 2024
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
                3 Months
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
    </FadeUp>
  );
}

export default Experience;