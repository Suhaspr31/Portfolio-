import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-950 fixed w-full z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">Suhas.dev</h1>

      <ul className="hidden md:flex gap-8 text-lg">
        {links.map((link) => (
          <li key={link} className="hover:text-blue-400 hover:scale-110 cursor-pointer transition-all duration-300 transform">
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {open && (
        <ul className="absolute top-20 left-0 w-full flex flex-col bg-gray-900 py-6 text-center gap-6 md:hidden">
          {links.map((link) => (
            <li key={link} className="hover:text-blue-400 hover:scale-105 text-xl transition-all duration-300 transform">
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
