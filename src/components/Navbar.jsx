import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "home";
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = section.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

          <a
            href="#home"
            className="text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white"
          >
            RS<span className="text-violet-600">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-[16px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-violet-600 after:transition-all after:duration-300 ${
                    active === link.id
                      ? "text-violet-600 dark:text-violet-400 after:w-full"
                      : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              <FaBars size={18} />
            </button>

          </div>

        </div>
      </nav>

      {/* Background Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200 dark:border-slate-700">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-white"
          >
            <FaTimes />
          </button>

        </div>

        <div className="flex flex-col p-6 space-y-6">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition ${
                active === link.id
                  ? "text-violet-600"
                  : "text-gray-700 dark:text-gray-300 hover:text-violet-600"
              }`}
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </>
  );
}

export default Navbar;