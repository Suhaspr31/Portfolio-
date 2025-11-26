import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-10 py-20 bg-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">🎓 Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-white">B.E - Computer Science and Engineering</h4>
              <p className="text-gray-400">Sri Venkateshwara College of Engineering, Bengaluru</p>
              <p className="text-gray-400">2022 – 2026 | CGPA: 7.76</p>
            </div>
          </div>
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">🏆 Extracurricular</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-white">Data Structures & Algorithms</h4>
              <p className="text-gray-400">Solved 100+ problems across LeetCode and GeeksforGeeks</p>
              <p className="text-gray-400">Strong in graphs, trees, DP, and system design patterns</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-white">Shell.ai Hackathon Participant</h4>
              <p className="text-gray-400">Contributed to a Machine Learning solution focused on fuel blend prediction</p>
              <p className="text-gray-400">Aimed to improve energy efficiency and sustainability</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Passion Statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-gray-300 max-w-4xl mx-auto text-lg mt-12 leading-relaxed"
      >
        I am passionate about building intelligent software solutions using AI and modern tech stacks.
        With experience in machine learning, computer vision, and full-stack development, I love solving
        real-world problems and creating impactful digital experiences. My journey in tech has equipped
        me with a strong foundation in both theoretical concepts and practical applications.
      </motion.p>
    </section>
  );
};

export default About;
