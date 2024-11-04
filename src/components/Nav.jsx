import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-5 fixed z-50 w-full bg-white shadow-md">
      {/* Increased z-index */}
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Icon for Mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-6 relative">
            <span
              className={`absolute block w-full h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 top-1/2" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-black transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 top-1/2" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 p-6 lg:hidden z-40">
          {" "}
          {/* Added z-index to mobile menu */}
          {navLinks.map((item) => (
            <li key={item.label} className="w-full text-center">
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition"
                onClick={toggleMenu} // Close menu on link click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
