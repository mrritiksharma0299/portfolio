import {
  SiPython,
  SiDjango,
  SiFlask,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

function Skills() {

  const skills = [
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
  ];


  return (

    <section
      id="skills"
      className="py-24 px-8 lg:px-20 bg-white"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="mb-14">

          <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-violet-600"></span>

            Skills

          </div>


          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            My Technical Skills
          </h2>

        </div>



        {/* Skills Cards */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-5
          "
        >

          {skills.map((skill,index)=>(

            <div
              key={index}
              className="
              flex
              items-center
              gap-3
              px-4
              py-4
              rounded-xl
              border
              border-gray-200
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              "
            >

              <div
                className="
                text-violet-600
                text-2xl
                flex-shrink-0
                "
              >
                {skill.icon}
              </div>


              <p className="text-sm font-semibold text-gray-800">
                {skill.name}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}


export default Skills;