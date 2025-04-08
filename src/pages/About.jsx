import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <motion.p
        className="max-w-2xl text-lg leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm Tomer Amitai, a passionate Security Researcher and Frontend
        Developer. I started my journey in cybersecurity and frontend after a
        Fullstack bootcamp, and I love blending creativity with technical
        challenges.
        <br />
        My goal is to keep growing, build useful things, and always stay
        curious.
      </motion.p>

      <motion.a
        href="/TomerCV.pdf"
        download
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        Download My CV
      </motion.a>
    </motion.div>
  );
}
