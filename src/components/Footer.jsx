import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/70 backdrop-blur-sm text-gray-400 text-sm z-50 relative mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-3 text-center">
        <span className="tracking-wide">
          © All rights reserved | Tomer Amitai {new Date().getFullYear()}
        </span>
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/Tomercio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tomerai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amitayy4@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
