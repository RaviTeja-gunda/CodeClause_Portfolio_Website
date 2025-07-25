// import { useState } from "react";
// import { Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";

// // Animation utility
// const fadeIn =
//   "transition-opacity duration-700 ease-in opacity-0 animate-fadeIn";

// const projects = [
//   {
//     title: "StudentCRUD",
//     desc: "A student record management system using Spring MVC with full CRUD capabilities.",
//     link: "",
//   },
//   {
//     title: "Super Bank of India",
//     desc: "Banking website using JDBC for deposits, withdrawals, and account operations.",
//     link: "",
//   },
//   {
//     title: "EAPCET College Recommender",
//     desc: "ML-based recommendation system using collaborative filtering to suggest colleges.",
//     link: "",
//   },
//   {
//     title: "Guess-Word",
//     desc: "Word guessing game built with Spring Boot featuring missing letter challenges.",
//     link: "",
//   },
//   {
//     title: "LoveCalculator",
//     desc: "Spring MVC app to calculate relationship compatibility using algorithmic logic.",
//     link: "",
//   },
//   {
//     title: "House Price Prediction",
//     desc: "Machine Learning app predicting house prices using regression techniques.",
//     link: "",
//   },
// ];

// export default function Portfolio() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (res.ok) {
//         alert("Message sent successfully!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         alert("Failed to send message. Please try again later.");
//       }
//     } catch (err) {
//       alert("Error sending message. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen font-sans relative transition duration-300 overflow-x-hidden ${
//         darkMode
//           ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white"
//           : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-gray-800"
//       }`}
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-400 via-indigo-100 to-white opacity-40"></div>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
//         <div className="relative group">
//           <img
//             src={process.env.PUBLIC_URL + "/profile.jpeg"}
//             className="w-44 h-44 rounded-full shadow-2xl border-4 border-indigo-400 transition-transform duration-700 animate-zoomInOut"
//             alt="Profile"
//             style={{ boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
//           />
//           <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white/80 text-indigo-700 rounded-full shadow-lg text-xs font-bold animate-bounce">
//             Portfolio
//           </span>
//         </div>
//         <div className="text-center md:text-left md:ml-10 mt-8 md:mt-0 animate-fadeIn">
//           <h1 className="text-5xl font-extrabold text-indigo-700 tracking-wide pr-4 mb-2">
//             <span className="inline-block animate-slideInLeft">Ravi</span>{" "}
//             <span className="inline-block animate-slideInLeft delay-150">
//               Teja
//             </span>{" "}
//             <span className="inline-block animate-slideInLeft delay-300">
//               Gunda
//             </span>
//           </h1>
//           <p className="text-xl mt-2 text-indigo-900 font-semibold animate-fadeInUp">
//             Java & Spring Boot Fresher
//           </p>
//           <div className="flex justify-center md:justify-start gap-6 mt-6">
//             <a
//               href="mailto:gundaraviteja3@gmail.com"
//               target="_blank"
//               className="group"
//             >
//               <Mail className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
//             </a>
//             <a
//               href="https://github.com/RaviTeja-gunda"
//               target="_blank"
//               className="group"
//             >
//               <Github className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/gunda-ravi-teja-0a9a99242/"
//               target="_blank"
//               className="group"
//             >
//               <Linkedin className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
//             </a>
//             <a
//               href={process.env.PUBLIC_URL + "/RaviTeja_resume.pdf"}
//               download
//               className="group"
//             >
//               <FileText className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-indigo-600" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="max-w-3xl mx-auto py-12 px-6 animate-fadeInUp">
//         <h2 className="text-4xl font-bold text-indigo-700 mb-4 underline underline-offset-8 decoration-indigo-400 animate-slideInLeft">
//           About Me
//         </h2>
//         <p className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-gray-800 text-lg font-medium border border-indigo-100 animate-fadeInUp">
//           I am a Computer Science graduate who loves to build simple and useful
//           software.
//           <br />
//           I have learned Java, Spring Boot, and some web development during my
//           college and internships.
//           <br />
//           I have worked on student apps, small banking systems, and basic
//           machine learning projects.
//           <br />I enjoy solving problems and want to grow as a software
//           developer by learning new things.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section className="py-12 px-6 animate-fadeInUp">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-indigo-700 mb-6 underline underline-offset-8 decoration-indigo-400 animate-slideInLeft">
//             Skills
//           </h2>
//           <div className="flex flex-wrap gap-4 justify-center">
//             {[
//               "Java",
//               "Spring Framework",
//               "Spring MVC",
//               "Spring Boot",
//               "HTML",
//               "Maven",
//               "Eclipse",
//             ].map((skill, i) => (
//               <span
//                 key={skill}
//                 className={`bg-gradient-to-r from-indigo-200 via-white to-indigo-100 text-indigo-900 px-5 py-2 rounded-full shadow-lg font-semibold border border-indigo-200 transition-all duration-300 hover:scale-110 hover:bg-indigo-300 animate-fadeInUp`}
//                 style={{ animationDelay: `${i * 100}ms` }}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-12 px-6 animate-fadeInUp">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-indigo-700 text-center mb-10 underline underline-offset-8 decoration-indigo-400 animate-slideInLeft">
//             Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((proj, i) => (
//               <div
//                 key={proj.title}
//                 className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-indigo-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
//                 style={{ animationDelay: `${i * 100}ms` }}
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-2xl font-bold text-indigo-800">
//                     {proj.title}
//                   </h3>
//                   {proj.link && (
//                     <a
//                       href={proj.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="w-6 h-6 text-indigo-600" />
//                     </a>
//                   )}
//                 </div>
//                 <p className="text-gray-700 text-base font-medium mt-2">
//                   {proj.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-3xl mx-auto py-12 px-6 animate-fadeInUp">
//         <h2 className="text-4xl font-bold text-indigo-700 text-center mb-6 underline underline-offset-8 decoration-indigo-400 animate-slideInLeft">
//           Contact Me
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-indigo-100 text-gray-800 space-y-6 animate-fadeInUp"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
//             rows="4"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </section>

//       <footer className="text-center text-sm py-8 text-indigo-700 animate-fadeIn">
//         <span className="bg-white/60 px-4 py-2 rounded-full shadow-lg">
//           © 2025 Ravi Teja Gunda — All rights reserved.
//         </span>
//       </footer>
//     </div>
//   );
// }

// Tailwind custom animations (add to your tailwind.config.js if needed)
// .animate-fadeIn { @apply opacity-0 animate-[fadeIn_1s_ease-in_forwards]; }
// .animate-fadeInUp { @apply opacity-0 animate-[fadeInUp_1s_ease-in_forwards]; }
// .animate-slideInLeft { @apply opacity-0 animate-[slideInLeft_1s_ease-in_forwards]; }
// .animate-gradient { @apply animate-[gradientMove_8s_linear_infinite]; }

import { useEffect } from "react";
import Navigation from "./portfolio/Navigation";
import HeroSection from "./portfolio/HeroSection";
import AboutSection from "./portfolio/AboutSection";
import SkillsSection from "./portfolio/SkillsSection";
import ProjectsSection from "./portfolio/ProjectsSection";
import ContactSection from "./portfolio/ContactSection";
import Footer from "./portfolio/Footer";

const Portfolio = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-gray-800 overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

// tailwind.config.js
// extend: {
//   animation: {
//     'float-glow': 'floatGlow 3s ease-in-out infinite',
//   },
//   keyframes: {
//     floatGlow: {
//       '0%, 100%': { transform: 'translateY(0) scale(1)', boxShadow: '0 0 32px 8px rgba(99,102,241,0.25), 0 8px 32px 0 rgba(99,102,241,0.15)' },
//       '50%': { transform: 'translateY(-16px) scale(1.05)', boxShadow: '0 0 48px 16px rgba(99,102,241,0.35), 0 16px 48px 0 rgba(99,102,241,0.25)' },
//     },
//   },
//   animation: {
//     zoomInOut: 'zoomInOut 2.5s ease-in-out infinite',
//   },
//   keyframes: {
//     zoomInOut: {
//       '0%, 100%': { transform: 'scale(1)' },
//       '50%': { transform: 'scale(1.10)' },
//     },
//   },
// }
