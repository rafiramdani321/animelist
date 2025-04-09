"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  subNavItem?: {
    label: string;
    href: string;
  }[];
}

interface NavItemProps {
  navitems: NavItem[];
}

const DesktopNav = ({ navitems }: NavItemProps) => {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = React.useState<string | null>(null);
  const [isHoverable, setIsHoverable] = React.useState(false);

  // Detect if device supports hover
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHoverable(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const pathSegments = pathname.split("/").filter(Boolean);
  const currentNav = pathSegments[0] || "";

  // Handle click outside to close menu
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".nav-dropdown")) {
        setActiveNav(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className="hidden lg:flex gap-x-12">
      {navitems.map((item) => {
        const isOpenItem = activeNav === item.id;
        const isCurrentItem =
          item.label.toLowerCase() === currentNav || isOpenItem;

        return (
          <li
            key={item.id}
            className="relative cursor-pointer font-normal flex items-center gap-x-0.5 nav-dropdown"
            onMouseEnter={() => {
              if (isHoverable) setActiveNav(item.id);
            }}
            onMouseLeave={() => {
              if (isHoverable) setActiveNav(null);
            }}
          >
            <div
              onClick={() =>
                setActiveNav((prev) => (prev === item.id ? null : item.id))
              }
              onFocus={() => setActiveNav(item.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setActiveNav(null);
                }
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded={isOpenItem}
              aria-controls={`dropdown-${item.id}`}
              className={cn(
                "flex items-center text-primary hover:text-secondary focus:outline-none",
                isCurrentItem && "text-secondary"
              )}
            >
              <span>{item.label}</span>
              <ChevronDown className="h-4 w-4 transition-opacity" />
            </div>
            <AnimatePresence>
              {isOpenItem && (
                <motion.div
                  id={`dropdown-${item.id}`}
                  role="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-[1.3rem] left-0 bg-backgroundSecondary shadow-secondary/40 shadow-sm rounded-md py-2 min-w-[200px] z-50 mt-2 nav-dropdown"
                >
                  {item.subNavItem?.map((subItem) => {
                    const isCurrentSubItem = pathname === subItem.href;
                    return (
                      <Link
                        onClick={() => setActiveNav(null)}
                        key={subItem.href}
                        href={subItem.href}
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2 text-sm text-primary hover:text-secondary focus:outline-none",
                          isCurrentSubItem && "text-secondary"
                        )}
                      >
                        {subItem.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
      <li>
        <Link href="/about" className="hover:text-secondary">
          About
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNav;
