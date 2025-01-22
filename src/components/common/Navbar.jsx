import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent backdrop-blur-sm text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-6">
        {/* Brand Name */}
        <Link to="/" className="text-3xl font-semibold font-serif">
          Sahid Balwa
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`${isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:space-x-8 absolute md:static top-16 left-1/2 transform -translate-x-1/2 w-full md:w-auto bg-gray-950 md:bg-transparent z-10 p-6 md:p-0 space-y-4 md:space-y-0 items-center justify-center`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-teal-400 font-sans text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-teal-400 font-sans text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-teal-400 font-sans text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            {/* <Link
              to="/footer"
              className="hover:text-teal-400 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
