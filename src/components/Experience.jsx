import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-8 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-600"></span>
            Experience
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Internship
          </h2>

        </div>

        {/* Experience Card */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >

          <div className="flex justify-between items-start">

            {/* Left Side */}

            <div className="flex gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-violet-100
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

              <div>

                <div className="flex items-center gap-3 flex-wrap">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Python Developer Intern
                  </h3>

                  <span
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-violet-100
                      text-violet-700
                      text-sm
                      font-medium
                    "
                  >
                    Unpaid
                  </span>

                </div>

                <p className="mt-2 text-gray-500 font-medium">
                  Noahnactor Private Limited
                </p>

                <p className="mt-5 text-gray-600 leading-8 max-w-3xl">
                  Worked on real-world projects using Python, Django and
                  MySQL, improving problem-solving and backend development
                  skills while collaborating on practical backend
                  applications.
                </p>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex items-center gap-3">

              <p className="text-gray-500 font-medium whitespace-nowrap">
                Jan 2024 – Mar 2024
              </p>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-violet-50
                  text-violet-700
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
  );
}

export default Experience;