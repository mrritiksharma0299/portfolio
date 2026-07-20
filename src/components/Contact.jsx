import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import FadeUp from "../utils/FadeUp";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mrritiksharma0299@gmail.com",
      link: "mailto:mrritiksharma0299@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "mrritiksharma0299",
      link: "https://github.com/mrritiksharma0299",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Ritik Sharma",
      link: "https://www.linkedin.com/in/ritik-sharma-008b262b9/",
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      value: "Himachal Pradesh",
      link: null,
    },
  ];

  return (
    <FadeUp>
    <section
      id="contact"
      className="py-24 px-8 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">

          {/* Left */}

          <div>

            <div className="flex items-center gap-2 text-violet-600 font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-violet-600"></span>
              Contact
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Get In Touch
            </h2>

          </div>

          {/* Right */}

          <div className="text-gray-600 dark:text-gray-300 text-lg leading-8">
            <p>
              I'm currently open to new opportunities.
            </p>

            <p>
              Feel free to reach out. I'd love to connect!
            </p>
          </div>

        </div>

        {/* Contact Card */}

        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-2xl
            p-8
            shadow-sm
            transition-colors
            duration-300
          "
        >

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {contacts.map((item, index) =>

              item.link ? (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-violet-600
                  "
                >

                  <div className="text-3xl mb-3 text-violet-600">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 break-all">
                    {item.value}
                  </p>

                </a>

              ) : (

                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  <div className="text-3xl mb-3 text-violet-600">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.value}
                  </p>

                </div>

              )

            )}

          </div>

        </div>

      </div>
    </section>
    </FadeUp>
  );
}

export default Contact;