import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          👋 Hi, I'm <span className="block mt-2">Suhas P R</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mt-6 text-gray-300 font-light"
        >
          AI Engineer • Full Stack Developer • ML & Computer Vision Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400"
        >
          <div className="flex items-center gap-2">
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <span>suhasprs331@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/suhas-p-r-6906b0310/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Suhaspr31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/suhaspr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-orange-400 hover:text-orange-300 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-bold">LC</span>
          </motion.a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)", transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
        >
          <a href="#projects">View My Work 🚀</a>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
