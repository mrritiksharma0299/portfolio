function Footer() {
  return (
    <footer className="border-t border-gray-200 py-5 px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

        {/* Left */}
        <div className="justify-self-start">
          <span className="text-lg font-bold text-gray-900">
            RS.
          </span>
        </div>

        {/* Center */}
        <div className="justify-self-center">
          <p className="text-sm text-gray-500">
            © 2026 Ritik Sharma . All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="justify-self-end">
          <p className="text-sm text-gray-500">
            Built with <span className="text-red-500">❤️</span> and lots of ☕
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;









 