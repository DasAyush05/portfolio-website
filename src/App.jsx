import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Navbar */}
<nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-2xl font-bold text-cyan-400">
      Ayush.dev
    </h1>

    <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

<a href="#home">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    Home
  </li>
</a>

<a href="#about">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    About
  </li>
</a>
<a href="#skills">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    Skills
  </li>
</a>
<a href="#projects">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    Projects
  </li>
</a>
     <a href="#resume">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    Resume
  </li>
</a>
<a href="#contact">
  <li className="hover:text-cyan-400 transition cursor-pointer">
    Contact
  </li>
</a>
    </ul>

  </div>
  

</nav>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Main Content */}
<div
  id="home"
  className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24"
>        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Ayush Das
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Developer • ML Enthusiast • Tech Explorer
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
          I build modern web applications, machine learning projects,
          and futuristic user experiences using React, Python, and AI technologies.
        </p>

        <button className="mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-full text-black font-semibold shadow-lg shadow-cyan-500/30">
          View Projects
        </button>

        <div className="flex gap-6 text-3xl mt-10 text-gray-300">

  <a
    href="https://github.com/DasAyush05"
    target="_blank"
    className="hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/ayush-das-65b533289"
    target="_blank"
    className="hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/"
    target="_blank"
    className="hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <FaInstagram />
  </a>

  <a
    href="https://leetcode.com/u/Das_Ayush/"
    target="_blank"
    className="hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <SiLeetcode />
  </a>

  <a
    href="https://www.hackerrank.com/profile/das325056"
    target="_blank"
    className="hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <SiHackerrank />
  </a>

</div>

      </div>
      {/* About Section */}
<section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
>

  <h2 className="text-5xl font-bold mb-8 text-cyan-400">
    About Me
  </h2>

  <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
    I am a passionate developer and tech enthusiast focused on
    building modern web applications, machine learning projects,
    and futuristic digital experiences. I enjoy solving problems,
    learning new technologies, and creating clean user interfaces.
  </p>

</section>
{/* Skills Section */}
<section
  id="skills"
  className="min-h-screen px-6 py-24 flex flex-col items-center justify-center"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-16">
    Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

    <div className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/10">
      <h3 className="text-2xl font-bold mb-4 text-cyan-300">
        Frontend
      </h3>

      <p className="text-gray-300 leading-relaxed">
        React, JavaScript, Tailwind CSS, HTML, CSS
      </p>
    </div>

    <div className="bg-white/5 border border-purple-400/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/10">
      <h3 className="text-2xl font-bold mb-4 text-purple-300">
        Backend
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Python, APIs, Flask, Firebase
      </p>
    </div>

    <div className="bg-white/5 border border-pink-400/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/10">
      <h3 className="text-2xl font-bold mb-4 text-pink-300">
        AI & ML
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Machine Learning, Data Science, OpenCV, NLP
      </p>
    </div>

  </div>

</section>
{/* Projects Section */}
<section
  id="projects"
  className="min-h-screen px-6 py-24 flex flex-col items-center justify-center"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-16">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">

    <div className="bg-white/5 border border-cyan-400/20 p-8 rounded-2xl backdrop-blur-lg hover:-translate-y-2 transition duration-300 shadow-lg shadow-cyan-500/10">

      <h3 className="text-3xl font-bold mb-4 text-cyan-300">
        Weather App
      </h3>

      <p className="text-gray-300 leading-relaxed mb-6">
        A modern weather forecasting web application using APIs,
        responsive UI, and real-time weather updates.
      </p>

      <button className="px-6 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
        View Project
      </button>

    </div>

    <div className="bg-white/5 border border-purple-400/20 p-8 rounded-2xl backdrop-blur-lg hover:-translate-y-2 transition duration-300 shadow-lg shadow-purple-500/10">

      <h3 className="text-3xl font-bold mb-4 text-purple-300">
        AI Game Bot
      </h3>

      <p className="text-gray-300 leading-relaxed mb-6">
        An intelligent AI-based game bot project using Python and
        machine learning concepts.
      </p>

      <button className="px-6 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-400 transition">
        View Project
      </button>

    </div>

  </div>

</section>
{/* Resume Section */}
<section
  id="resume"
  className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-10">
    Resume
  </h2>

  <p className="text-gray-300 max-w-2xl mb-10 text-lg">
    Download my resume to know more about my education,
    technical skills, projects, and experience.
  </p>

  <a
    href="/resume.pdf"
    download
    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-semibold transition shadow-lg shadow-cyan-500/20"
  >
    Download Resume
  </a>

</section>
{/* Contact Section */}
<section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-10">
    Contact Me
  </h2>

  <p className="text-gray-300 max-w-2xl mb-12 text-lg">
    Have a project idea, collaboration opportunity, or just want to connect?
    Feel free to reach out.
  </p>

  <div className="flex flex-col gap-6 w-full max-w-xl">

    <input
      type="text"
      placeholder="Your Name"
      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-400 text-white"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-400 text-white"
    />

    <textarea
      placeholder="Your Message"
      rows="5"
      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-400 text-white"
    ></textarea>

    <button
      className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-4 rounded-xl shadow-lg shadow-cyan-500/20"
    >
      Send Message
    </button>

  </div>

</section>
    </div>
  );
}

export default App;