function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold tracking-wide text-gray-900 hover:text-violet-600 transition"
        >
          RS<span className="text-violet-600">.</span>
        </a>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center gap-9">

          {navLinks.map((link) => (

            <li key={link.name}>

              <a
                href={link.href}
                className="
                  relative
                  text-[16px]
                  font-medium
                  text-gray-700
                  transition-all
                  duration-300
                  hover:text-violet-600

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-violet-600
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.name}
              </a>

            </li>

          ))}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;