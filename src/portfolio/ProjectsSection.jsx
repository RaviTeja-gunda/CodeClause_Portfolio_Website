import { useState } from "react";

const projects = [
  {
    title: "StudentCRUD",
    desc: "A student record management system using Spring MVC with full CRUD capabilities.",
    link: "",
  },
  {
    title: "Super Bank of India",
    desc: "Banking website using JDBC for deposits, withdrawals, and account operations.",
    link: "",
  },
  {
    title: "EAPCET College Recommender",
    desc: "ML-based recommendation system using collaborative filtering to suggest colleges.",
    link: "",
  },
  {
    title: "Guess-Word",
    desc: "Word guessing game built with Spring Boot featuring missing letter challenges.",
    link: "",
  },
  {
    title: "LoveCalculator",
    desc: "Spring MVC app to calculate relationship compatibility using algorithmic logic.",
    link: "",
  },
  {
    title: "House Price Prediction",
    desc: "Machine Learning app predicting house prices using regression techniques.",
    link: "",
  },
];

const projectSkills = {
  LoveCalculator: ["Spring MVC", "Web Development"],
  "Guess-Word": ["Spring Boot", "Game Logic", "Vocabulary", "Web Development"],
  StudentCRUD: ["Spring MVC", "CRUD", "Database", "Data Management"],
  "Super Bank of India": ["JDBC", "Banking Operations", "Web Development"],
  "EAPCET College Recommender": [
    "Collaborative Filtering",
    "Content-Based Filtering",
    "Natural Language Processing",
    "Machine Learning",
  ],
  "Oasis Infobyte Internship": [
    "Command Line Interface",
    "Number Guessing Game",
    "ATM Interface",
    "Programming Fundamentals",
  ],
  "CodeClause Internship": ["HTML", "CSS", "Portfolio", "Web Development"],
  "House Price Prediction": ["Machine Learning", "Regression"],
};

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section
      className="py-12 px-[5%] animate-fadeInUp"
      id="projects"
      onMouseEnter={() => setHoveredIndex(null)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="w-full">
        <h2
          className="text-4xl font-bold text-indigo-700 mb-10 transition-all duration-300 animate-slideInLeft relative text-left"
          style={{ position: "relative", display: "inline-block" }}
        >
          Projects
          <span
            className="absolute left-0 bottom-0 h-[3px] bg-indigo-400 transition-all duration-500 origin-left"
            style={{
              width: "100%",
              transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="bg-white/80 rounded-xl shadow-lg p-6 border border-indigo-100 transition-all duration-300 hover:scale-105 relative flex flex-col md:flex-row md:items-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex-1">
                {proj.link ? (
                  <a
                    href={
                      proj.link.startsWith("http")
                        ? proj.link
                        : `https://${proj.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-indigo-700 mb-2 hover:underline focus:underline block"
                  >
                    {proj.title}
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                    {proj.title}
                  </h3>
                )}
                <p className="text-gray-800 mb-4">{proj.desc}</p>
              </div>
              {hoveredIndex === i && (
                <div className="md:ml-8 mt-4 md:mt-0 flex flex-col items-start animate-fadeInUp">
                  <span className="block text-indigo-700 font-bold mb-2 text-base">
                    Skills Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectSkills[proj.title]?.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gradient-to-r from-indigo-100 via-white to-indigo-200 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold border border-indigo-300 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
