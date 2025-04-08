import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-3 items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/TAlogo.png"
              alt="Tomer Amitai Logo"
              className="h-14 sm:h-20 object-contain"
            />
          </Link>
        </div>

        <nav className="flex justify-center gap-10 text-gray-300 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About Me
          </Link>
        </nav>

        {/* עמודה 3 - ריקה כדי לאזן */}
        <div />
      </div>
    </header>
  );
}
