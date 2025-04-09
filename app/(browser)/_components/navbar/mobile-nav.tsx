import { cn } from "@/lib/utils";
import { useNavbar } from "@/store/use-navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItems {
  id: string;
  label: string;
  subNavItem?: {
    label: string;
    href: string;
  }[];
}

interface NavItemProps {
  navitems: NavItems[];
}

const MobileNav = ({ navitems }: NavItemProps) => {
  const { onClick } = useNavbar((state) => state);
  const pathname = usePathname();
  const [activeNavItem, setActiveNavItem] = React.useState<string | null>(null);

  const pathSegments = pathname.split("/").filter(Boolean);
  const currentNav = pathSegments[0] || "";

  const handleToggle = (itemId: string) =>
    setActiveNavItem((prev) => (prev === itemId ? null : itemId));

  return (
    <ul className="space-y-20 relative z-50 text-center w-full">
      {navitems.map((item) => {
        const isCurrentItem = item.label.toLowerCase() === currentNav;
        const isOpenItem = activeNavItem === item.id;

        return (
          <li
            key={item.id}
            className={cn("relative flex flex-col items-center gap-y-2")}
          >
            <div
              className={cn(
                "flex items-center gap-x-1 text-xl",
                isCurrentItem
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              )}
            >
              <div
                onClick={() => handleToggle(item.id)}
                className="flex items-center gap-x-0.5 cursor-pointer"
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={cn(
                    "transition-opacity h-4 w-4 font-bold",
                    isOpenItem ? "opacity-100" : "opacity-50"
                  )}
                />
              </div>
            </div>

            <AnimatePresence>
              {isOpenItem && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-4 text-primary border-t border-b border-secondary"
                >
                  {item?.subNavItem?.map((subItem) => {
                    const isCurrentSubItem = pathname === subItem.href;
                    return (
                      <Link
                        onClick={onClick}
                        href={subItem.href}
                        key={subItem.href}
                        className={cn(
                          "block text-primary z-50 hover:bg-backgroundSecondary text-base transition-colors px-4 py-2",
                          isCurrentSubItem && "bg-backgroundSecondary"
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
      <li className="hover:text-secondary text-primary text-xl">About</li>
    </ul>
  );
};

export default MobileNav;
