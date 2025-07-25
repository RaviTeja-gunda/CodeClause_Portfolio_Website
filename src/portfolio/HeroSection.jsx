import { Mail, Github, Linkedin, FileText } from "lucide-react";

const HeroSection = () => (
  <section
    className="flex flex-col md:flex-row items-center justify-start min-h-[70vh] px-4 md:px-20 py-20 gap-12 md:gap-36 md:ml-24"
    id="hero"
  >
    <div className="relative group flex-shrink-0 mb-8 md:mb-0">
      <img
        src={process.env.PUBLIC_URL + "/profile.jpg"}
        className="w-44 h-44 rounded-full shadow-2xl border-4 animate-borderColor transition-transform duration-700 animate-zoomInOut"
        alt="Profile"
        style={{
          boxShadow:
            "0 0 32px 8px rgba(99,102,241,0.25), 0 8px 32px 0 rgba(99,102,241,0.15)",
        }}
      />
    </div>
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-5xl font-extrabold text-indigo-700 tracking-wide pr-4 mb-2 animate-pulse">
        <span className="inline-block animate-wiggle">Ravi</span>{" "}
        <span className="inline-block animate-wiggle delay-150">Teja</span>{" "}
        <span className="inline-block animate-wiggle delay-300">Gunda</span>
      </h1>
      <p className="text-xl mt-2 text-indigo-900 font-semibold animate-fadeInUp">
        Java & Spring Boot Fresher
      </p>
      <div className="flex justify-center md:justify-start gap-6 mt-6">
        <a
          href="mailto:gundaraviteja3@gmail.com"
          target="_blank"
          className="group"
        >
          <Mail className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
        </a>
        <a
          href="https://github.com/RaviTeja-gunda"
          target="_blank"
          className="group"
        >
          <Github className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/gunda-ravi-teja-0a9a99242/"
          target="_blank"
          className="group"
        >
          <Linkedin className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
        </a>
        <a
          href={process.env.PUBLIC_URL + "/RaviTeja_resume.pdf"}
          download
          className="group"
        >
          <FileText className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
