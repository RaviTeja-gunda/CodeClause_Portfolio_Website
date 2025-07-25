import { useState } from "react";

const ContactSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="max-w-3xl mx-auto py-12 px-6 animate-fadeInUp"
      id="contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full flex justify-center">
        <h2
          className="text-4xl font-bold text-indigo-700 mb-6 transition-all duration-300 animate-slideInLeft relative"
          style={{ position: "relative", display: "inline-block" }}
        >
          Contact Me
          <span
            className="absolute left-0 bottom-0 h-[3px] bg-indigo-400 transition-all duration-500 origin-left"
            style={{
              width: hovered ? "100%" : "0%",
              transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </h2>
      </div>
      <form className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-indigo-100 text-gray-800 space-y-6 animate-fadeInUp">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
