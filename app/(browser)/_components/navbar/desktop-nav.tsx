import React from 'react'
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  subNavItem?: {
    label: string;
    href: string
  }[];
};

interface NavItemProps {
  navitems: NavItem[];
};


const DesktopNav = ({ navitems }: NavItemProps) => {

  const [activeNavItem, setActiveNavItem] = React.useState<string | null>(null);
  const [clickedNavItem, setClickedNavItem] = React.useState<string | null>(null);

  const handleMouseEnter = (itemId: string) => {
    if (!clickedNavItem) {
      setActiveNavItem(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (!clickedNavItem) {
      setActiveNavItem(null);
    }
  };

  const handleClick = (itemId: string) => {
    if (clickedNavItem === itemId) {
      setClickedNavItem(null);
      setActiveNavItem(null);
    } else {
      setClickedNavItem(itemId);
      setActiveNavItem(itemId);
    }
  };

  return (
      <ul className='hidden lg:flex gap-x-12'>
        {navitems.map(item => {
          const isOpen = activeNavItem === item.id || clickedNavItem === item.id;
          return (
            <li 
              className={cn(
                "flex items-center gap-x-0.5 text-primary font-normal relative cursor-pointer", 
                isOpen ? "text-secondary" : null
              )}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
              <ChevronDown className={cn("h-4 w-4 transition-opacity", isOpen ? "opacity-100" : "opacity-50")} />
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-[1.3rem] left-0 bg-bgsecondary shadow-lg rounded-md py-2 min-w-[200px] z-50 mt-2"
                  >
                    {item?.subNavItem?.map(subItem => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-primary hover:bg-bgsecodaryHover transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
        <li>
          <Link href="/about" className='hover:text-secondary'>
            About
          </Link>
        </li>
      </ul>
  )
}

export default DesktopNav