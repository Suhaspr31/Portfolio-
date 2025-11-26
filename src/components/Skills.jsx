import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Python", "C++", "Java", "JavaScript", "SQL"],
    icon: "💻"
  },
  {
    title: "Technologies/Frameworks",
    skills: ["Git", "GitHub", "ReactJS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TensorFlow", "OpenCV", "Flask", "YOLOv8", "Google Gemini API"],
    icon: "⚙️"
  },
  {
    title: "Systems & Concepts",
    skills: ["Distributed Systems", "Operating Systems", "Computer Networks (TCP/IP, OSI)", "Object-Oriented Programming", "Version Control", "Machine Learning", "Natural Language Processing", "Computer Vision"],
    icon: "🧠"
  },
  {
    title: "Coursework",
    skills: ["Data Structures & Algorithms", "Database Management Systems", "Cloud Computing", "Big Data Analytics"],
    icon: "📚"
  },
  {
    title: "Certifications",
    skills: [
      { name: "Python for Data Science – IBM", link: "https://drive.google.com/file/d/1c4YDpDDeH5qEq-xtE6p782SeZlsGZnDE/view?usp=drive_link" },
      { name: "GenAI Powered Data Analytics Job Simulation – Tata", link: "https://drive.google.com/file/d/18zwe1VAcLNTiAStuDJOqdl4EyOcdXnTn/view?usp=drive_link" },
      { name: "Artificial Intelligence Foundation Certification – Infosys", link: "https://drive.google.com/file/d/1anDKAx9-d3YKuLwRifVWOP1y7r9ioZat/view?usp=drive_link" },
      { name: "Python Development Internship – OCTANET SERVICES PVT LTD", link: "https://drive.google.com/file/d/1_r1AKiHG2X2mMSvSrn4MhSyfyw5bNI1g/view?usp=drive_link" }
    ],
    icon: "🏆"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="px-10 py-20 bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">{category.icon}</span>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={typeof skill === 'string' ? skill : skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
                  className="bg-gray-700 p-3 text-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {typeof skill === 'string' ? (
                    <span className="text-gray-200 font-medium">{skill}</span>
                  ) : (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 font-medium underline"
                    >
                      {skill.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
