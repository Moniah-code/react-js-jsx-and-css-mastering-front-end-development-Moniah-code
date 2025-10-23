import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyReactApp</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded bg-white dark:bg-gray-800 text-blue-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-blue-900 space-y-2 px-4 pb-3 transition-colors duration-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link to="/tasks" onClick={() => setIsOpen(false)} className="block hover:underline">Tasks</Link>
          <Link to="/posts" onClick={() => setIsOpen(false)} className="block hover:underline">Posts</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <button
            onClick={() => { toggleTheme(); setIsOpen(false); }}
            className="block w-full text-left px-3 py-1 rounded bg-white dark:bg-gray-800 text-blue-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
