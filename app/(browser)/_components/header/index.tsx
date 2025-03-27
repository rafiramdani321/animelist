import React from "react";
import Navbar from "../navbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-secondary z-50">
      <Navbar />
    </header>
  );
};

export default Header;
