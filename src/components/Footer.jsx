import FadeUp from "../utils/FadeUp";

function Footer() {
  return (
    <FadeUp>
      <footer
        className="
          border-t
          border-gray-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-950
          py-5
          px-8
          lg:px-20
          transition-colors
          duration-300
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

          {/* Left */}
          <div className="justify-self-start">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              RS.
            </span>
          </div>

          {/* Center */}
          <div className="justify-self-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 Ritik Sharma. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="justify-self-end">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-violet-600">
                Ritik Sharma
              </span>
            </p>
          </div>

        </div>
      </footer>
    </FadeUp>
  );
}

export default Footer;