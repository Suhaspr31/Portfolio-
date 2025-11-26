import { motion } from "framer-motion";

const projects = [
  {
    name: "AgroUnify – Smart Farming and Agricultural Platform",
    date: "Jan'25",
    tech: ["Python", "React", "MongoDB", "YOLOv8", "Google Gemini API"],
    desc: "Developed a comprehensive AI-powered agricultural platform integrating crop disease diagnosis, real-time IoT monitoring, and market intelligence for farmers. Implemented Google Gemini API and YOLOv8 computer vision models to detect 20+ crop diseases with 92%+ accuracy, providing instant treatment recommendations. Built a full-stack microservices architecture with React PWA frontend, Node.js/Express backend, Python AI services, and MongoDB for scalable data management. Integrated weather APIs, multilingual support (4 languages), SMS alerts, and ML-based price forecasting to deliver personalized farming insights and marketplace connectivity.",
    link: "https://github.com/Suhaspr31"
  },
  {
    name: "AI-Based Facial Recognition System",
    date: "Dec'24",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "SQLite"],
    desc: "Built a real-time face recognition attendance system using Python and OpenCV with live webcam-based detection and recognition. Integrated a Flask web interface to manage users, register new faces, and view recorded attendance logs. Implemented SQL database storage for user records and automated timestamped attendance tracking. Designed for secure, fast and efficient verification, enabling seamless use cases such as access logging, classroom/office attendance, and visitor authentication.",
    link: "https://github.com/Suhaspr31"
  },
  {
    name: "Sentiment Watchdog – AI-Powered Review Analyzer",
    date: "Jul'24",
    tech: ["Python", "NLP", "scikit-learn", "Flask", "TF-IDF", "Logistic Regression"],
    desc: "Built an automated sentiment classification system using machine learning and NLP to analyze customer reviews and detect polarity in real time. Trained and evaluated models using TF-IDF, Logistic Regression, and Na¨ıve Bayes to improve accuracy and interpretability. Developed a Flask-based web interface for users to input text and receive instant sentiment feedback with confidence scores.",
    link: "https://github.com/Suhaspr31"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-10 py-20 bg-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{proj.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{proj.date}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                {proj.tech.map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">{proj.desc}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300"
              href={proj.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
