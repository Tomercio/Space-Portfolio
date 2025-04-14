import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-3 items-center bg-black/75">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/TAlogo.png"
              alt="Tomer Amitai Logo"
              className="h-14 sm:h-20 object-contain"
            />
          </Link>
        </div>

        <nav className="flex justify-center gap-6 text-gray-300 text-sm whitespace-nowrap">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400 transition">
            About Me
          </Link>
        </nav>

        <div />
      </div>
    </header>
  );
}
