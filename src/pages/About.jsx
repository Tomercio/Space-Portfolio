import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-6">
        About <span className="text-purple-300">Me</span>
      </h1>

      <motion.p
        className="max-w-2xl text-lg leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hey ! It's Tomer, After 6 successful years in sales, I've made an
        exciting career shift to follow my true passion: cybersecurity. While
        learning full-stack development and network operations along the way, I
        started my journey to evolve in the cyber security field. My toolkit
        includes alots of offensive and deffensive tools. I'm experienced in
        network scanning, vulnerability assessment, web application security
        testing, and system enumeration. Currently expanding my knowledge in
        exploit development and privilege escalation techniques. Now I'm
        channeling my energy into building security tools and to master Python.
        <br />
        In my free time, I am into traveling around the world, off road driving,
        extreme activities and gaming. Love to learn new things and grow as a
        person.
        <br /> Excited about the future. Let's connect !
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
