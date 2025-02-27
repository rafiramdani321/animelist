import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface NavItems {
  id: string;
  label: string;
  subNavItem?: {
    label: string;
    href: string;
  }[];
};

interface NavItemProps {
  navitems: NavItems[];
};

const MobileNav = ({ navitems } : NavItemProps) => {

  const [activeNavItem, setActiveNavItem] = React.useState<string | null>(null);
  const [clickedNavItem, setClickedNavItem] = React.useState<string | null>(null);

  
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
    <ul className='space-y-20 relative z-50 text-center text-xl text-primary cursor-pointer w-full'>
      {navitems.map(item => {
        const isOpen = activeNavItem === item.id || clickedNavItem === item.id;
        return (
          <li
            key={item.id}
            className={cn(
              "relative flex flex-col items-center gap-y-2 hover:text-secondary",
              isOpen && "text-secondary"
            )}
            onClick={() => handleClick(item.id)}
          >
            <div className="flex items-center gap-x-2">
              {item.label}
              <ChevronDown className={cn(
                "transition-opacity h-5 w-5",
                isOpen ? "opacity-100" : "opacity-50"
              )} />
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className='p-4 text-primary rounded-md shadow-md'
                >
                  {item?.subNavItem?.map(subItem => (
                    <Link
                      href={subItem.href}
                      key={subItem.href}
                      className='block text-primary z-50 hover:bg-bgsecodaryHover text-base transition-colors px-4 py-2'
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
      <li className='hover:text-secondary'>About</li>
    </ul>
  )
}

export default MobileNav