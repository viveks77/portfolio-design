import React from "react";

const Navbar = () => {
  return (
    <nav className="z-[101] fixed h-[80px] w-full bg-transparent backdrop-blur-sm">
      <div className="flex justify-end align-center p-7 mx-8 space-x-4">
        <a href="#projects" className="btn-link">Projects</a>
        <a href="#contact" className="btn-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
