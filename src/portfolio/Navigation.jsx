const Navigation = () => (
  <nav className="w-full py-4 px-8 bg-indigo-700 text-white shadow-lg flex justify-between items-center">
    <span className="font-bold text-xl tracking-wide animate-textColor">
      RaviTeja Portfolio
    </span>
    <div className="space-x-6">
      <a
        href="#about"
        className="no-underline hover:underline transition-all duration-300 hover:text-indigo-200"
      >
        About
      </a>
      <a
        href="#skills"
        className="no-underline hover:underline transition-all duration-300 hover:text-indigo-200"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="no-underline hover:underline transition-all duration-300 hover:text-indigo-200"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="no-underline hover:underline transition-all duration-300 hover:text-indigo-200"
      >
        Contact
      </a>
    </div>
  </nav>
);

export default Navigation;
