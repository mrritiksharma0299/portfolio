import {
  FaGlobe,
  FaFilm,
  FaCode,
} from "react-icons/fa";
import FadeUp from "../utils/FadeUp";

function Projects() {
  const projects = [
    {
      icon: <FaGlobe />,
      title: "WorldThread",
      description:
        "A modern blogging platform built with Django and Wagtail where users can create, publish and discover stories from around the world.",
      tech: ["Django", "Wagtail", "Python"],
      link: "https://blog-platform-nzzv.onrender.com",
      comingSoon: false,
    },
    {
      icon: <FaFilm />,
      title: "Movies World",
      description:
        "A movie discovery web application built with Flask that lets users search, explore and view detailed movie information.",
      tech: ["Flask", "Python", "HTML", "CSS"],
      // Replace with your deployed Movies World URL when it's live
      link: "https://github.com/mrritiksharma0299",
      comingSoon: false,
    },
    {
      icon: <FaCode />,
      title: "More Projects",
      description:
        "I'm continuously building new applications and experimenting with fresh ideas. More exciting projects will be added soon.",
      tech: ["</>", "Coming Soon"],
      link: "#",
      comingSoon: true,
    },
  ];

  const handleComingSoon = () => {
    alert("🚀 More exciting projects are coming soon!");
  };

  return (
    <FadeUp>
      <section
        id="projects"
        className="py-24 px-8 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="flex justify-between items-end mb-14">

            <div>
              <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
                <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                Projects
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                Some Things I've Built
              </h2>
            </div>

            <button
              className="
                text-violet-600
                font-semibold
                hover:text-violet-700
                hover:translate-x-1
                transition-all
                duration-300
              "
            >
              View All Projects →
            </button>

          </div>

          {/* Project Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-gray-900
                  border
                  border-gray-200
                  dark:border-gray-700
                  rounded-2xl
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-400
                  hover:shadow-xl
                "
              >

                <div className="flex items-start gap-5">

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
                    {project.icon}
                  </div>

                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-gray-500 dark:text-gray-400 leading-7">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">

                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-gray-100
                            dark:bg-gray-800
                            text-gray-700
                            dark:text-gray-300
                            text-sm
                            font-medium
                          "
                        >
                          {item}
                        </span>
                      ))}

                    </div>

                    {project.comingSoon ? (
                      <button
                        onClick={handleComingSoon}
                        className="
                          mt-6
                          text-violet-600
                          font-semibold
                          hover:text-violet-700
                          transition-all
                          duration-300
                        "
                      >
                        View Project →
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-block
                          mt-6
                          text-violet-600
                          font-semibold
                          hover:text-violet-700
                          transition-all
                          duration-300
                        "
                      >
                        View Project →
                      </a>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeUp>
  );
}

export default Projects;