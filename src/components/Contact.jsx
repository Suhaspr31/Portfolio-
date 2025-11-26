import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-10 py-20 bg-gradient-to-b from-gray-950 to-black text-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interested in working together, collaborating on projects, or just want to chat about tech?
          I'd love to hear from you!
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <motion.a
            href="mailto:suhasprs331@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)", transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <FaEnvelope />
            Email Me
          </motion.a>

         
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/suhas-p-r-6906b0310/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Suhaspr31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/suhaspr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-orange-400 hover:text-orange-300 transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-bold">LC</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-gray-500"
        >
          <p>© 2025 Suhas P R. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
