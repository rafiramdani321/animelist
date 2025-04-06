import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="flex justify-center gap-x-2 w-full items-center self-center">
        <Facebook className="h-6 w-6 text-primary-foreground hover:text-primary cursor-pointer" />
        <Twitter className="h-6 w-6 text-primary-foreground hover:text-primary cursor-pointer" />
        <Instagram className="h-6 w-6 text-primary-foreground hover:text-primary cursor-pointer" />
      </div>
      <p className="text-center mt-4 text-primary text-sm">
        &copy; 2025 <span className="text-secondary">AnimeList</span>. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
