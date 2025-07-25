import { useState } from "react";

const skills = [
  "Core Java",
  "Spring Framework",
  "Spring MVC",
  "Spring Boot",
  "HTML",
  "Github",
  "Maven",
  "Eclipse",
];
const SkillsSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="py-12 px-[5%] animate-fadeInUp"
      id="skills"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full">
        <h2
          className="text-4xl font-bold text-indigo-700 mb-6 transition-all duration-300 animate-slideInLeft relative"
          style={{ position: "relative", display: "inline-block" }}
        >
          Skills
          <span
            className="absolute left-0 bottom-0 h-[3px] bg-indigo-400 transition-all duration-500 origin-left"
            style={{
              width: hovered ? "100%" : "0%",
              transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className={`bg-gradient-to-r from-indigo-200 via-white to-indigo-100 text-indigo-900 px-5 py-2 rounded-full shadow-lg font-semibold border border-indigo-200 transition-all duration-300 hover:scale-110 hover:bg-indigo-300 animate-fadeInUp`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
