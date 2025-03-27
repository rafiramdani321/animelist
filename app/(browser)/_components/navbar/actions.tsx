"use client";

import React from "react";

import { Menu, X } from "lucide-react";
import DesktopNav from "./desktop-nav";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./mobile-nav";

const Actions = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navitems = [
    {
      id: "1",
      label: "Anime",
      subNavItem: [
        { label: "Top Anime", href: "/anime/top-anime" },
        { label: "Seasonal Anime", href: "/anime/seasonal-anime" },
        { label: "Videos", href: "/anime/videos" },
        { label: "Reviews", href: "/anime/reviews" },
        { label: "Recommendations", href: "/anime/recommendations" },
      ],
    },
    {
      id: "2",
      label: "Manga",
      subNavItem: [
        { label: "Top Manga", href: "/manga/top-manga" },
        { label: "Seasonal Manga", href: "/manga/seasonal-manga" },
        { label: "Reviews", href: "/manga/reviews" },
        { label: "Recommendations", href: "/manga/recommendations" },
      ],
    },
    {
      id: "3",
      label: "Community",
      subNavItem: [
        { label: "Forums", href: "/community/forums" },
        { label: "Clubs", href: "/community/clubs" },
        { label: "Blogs", href: "/community/blogs" },
      ],
    },
  ];

  return (
    <div className="z-50">
      {/* Mobile Menu Button */}
      <button
        className="text-primary hover:text-primary-foreground lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <motion.div
          key={String(isMobileMenuOpen)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring" },
          }}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.div>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-x-12 z-50">
        <DesktopNav navitems={navitems} />
      </ul>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 w-full h-screen mt-3 backdrop-blur-lg bg-background/30 z-50"
          >
            <div className="flex justify-center items-center h-screen w-full">
              <MobileNav navitems={navitems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Actions;
