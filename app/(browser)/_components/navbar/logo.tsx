"use client";

import React from "react";
import Link from "next/link";

import { useNavbar } from "@/store/use-navbar";

const Logo = () => {
  const { isOpen, onClick } = useNavbar((state) => state);
  const handleClick = () => {
    if (isOpen) {
      onClick();
    }
    localStorage.removeItem("activeNav");
    localStorage.removeItem("activeSubNavItem");
  };
  return (
    <div className="relative flex items-center w-fit">
      <Link
        onClick={handleClick}
        href={"/"}
        className="text-3xl font-extrabold italic text-white drop-shadow-md"
      >
        Anime<span className="text-secondary">List</span>
      </Link>
    </div>
  );
};

export default Logo;
