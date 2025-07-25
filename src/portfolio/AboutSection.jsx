import { useState } from "react";

const AboutSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="w-full py-12 px-[5%] animate-fadeInUp text-left"
      id="about"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2
        className="text-4xl font-bold text-indigo-700 mb-4 transition-all duration-300 animate-slideInLeft relative"
        style={{ position: "relative", display: "inline-block" }}
      >
        About Me
        <span
          className="absolute left-0 bottom-0 h-[3px] bg-indigo-400 transition-all duration-500 origin-left"
          style={{
            width: hovered ? "100%" : "0%",
            transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </h2>
      <p className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-gray-800 text-lg font-medium border border-indigo-100 animate-fadeInUp">
        I am a Computer Science graduate who loves to build simple and useful
        software. I have learned Java, Spring basics, and some web development
        during my college and internships. I have applied these skills on some
        small projects like student CRUD operations, small banking systems, and
        basic machine learning projects. I enjoy solving problems and want to
        grow as a software developer by learning new things. I am always eager
        to take on new challenges and improve my skills.
      </p>
    </section>
  );
};

export default AboutSection;
