import {
  FaHome,
  FaGlobe,
  FaFilm,
  FaShoppingBag,
} from "react-icons/fa";
import FadeUp from "../utils/FadeUp";

function Projects() {
  const projects = [
    {
      icon: <FaHome />,
      title: "Prince Homestay",
      description:
        "A modern business website developed for a real homestay in Himachal Pradesh. The website features responsive design, SEO optimization, room showcases, nearby attractions, contact information, and a seamless booking experience.",
      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Vite",
        "React Router",
        "SEO",
      ],
      link: "https://prince-homestay-sarkidhar.vercel.app/",
      comingSoon: false,
    },
    {
      icon: <FaGlobe />,
      title: "WorldThread",
      description:
        "A modern blogging platform built with Django and Wagtail where users can create, publish, and discover stories through a clean, scalable, and user-friendly content management system.",
      tech: [
        "Django",
        "Wagtail",
        "Python",
        "PostgreSQL",
      ],
      link: "https://blog-platform-nzzv.onrender.com",
      comingSoon: false,
    },
    {
      icon: <FaShoppingBag />,
      title: "NovaStore",
      description:
        "A full-stack e-commerce web application featuring secure JWT authentication, product catalog, search and filtering, product details, shopping cart, responsive UI, and a RESTful backend built with Django REST Framework.",
      tech: [
        "React",
        "Tailwind CSS",
        "Django",
        "Django REST Framework",
        "JWT",
        "PostgreSQL",
        "REST API",
        "Vite",
      ],
      link: "https://novastore-6a1r.onrender.com/",
      comingSoon: false,
    },
    {
      icon: <FaFilm />,
      title: "Movies World",
      description:
        "A responsive movie discovery web application built with Flask that allows users to search movies, explore detailed information, and enjoy a clean and intuitive browsing experience.",
      tech: [
        "Flask",
        "Python",
        "REST API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      link: "https://movies-world-mfaz.onrender.com",
      comingSoon: false,
    },
  ];

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