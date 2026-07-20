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
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-8 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-600"></span>
            Skills
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My Technical Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              transition={{ duration: 0.2 }}
              className="
                flex
                items-center
                gap-3
                px-4
                py-4
                rounded-xl
                border
                border-gray-200
                dark:border-gray-700
                bg-white
                dark:bg-gray-900
                shadow-sm
                hover:shadow-xl
                cursor-pointer
              "
            >
              <div className="text-violet-600 text-2xl flex-shrink-0">
                {skill.icon}
              </div>

              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;