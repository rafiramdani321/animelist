import React from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import { AnimeCharactersFullProps } from "@/types/anime-types";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useSortedCharactersAnime } from "@/store/use-sortedCharactersAnime";
import { cn } from "@/lib/utils";

interface CharactersContentProps {
  data: AnimeCharactersFullProps[];
}

const dataSortedBy = [
  {
    id: 1,
    name: "Main Role",
  },
  {
    id: 2,
    name: "Favorites",
  },
  {
    id: 3,
    name: "Alphabetical",
  },
];

const CharactersContent = ({ data }: CharactersContentProps) => {
  const { activeSorted, setActiveSorted, hasHydrated } =
    useSortedCharactersAnime();
  const [sortedByMainRole, setSortedByMainRole] = React.useState(false);

  const sortedData = React.useMemo(() => {
    const copied = [...data];

    switch (activeSorted) {
      case "Main Role":
        return copied.sort((a, b) => {
          const aIsMain = a.role === "Main" ? 0 : 1;
          const bIsMain = b.role === "Main" ? 0 : 1;
          return aIsMain - bIsMain;
        });
      case "Favorites":
        return copied.sort((a, b) => b.favorites - a.favorites);
      case "Alphabetical":
        return copied.sort((a, b) =>
          a.character.name.localeCompare(b.character.name)
        );
      default:
        return copied;
    }
  }, [data, activeSorted]);

  const handleClickSorted = (name: string) => {
    setActiveSorted(name);
    setSortedByMainRole(false);
  };

  if (!hasHydrated) return null;

  return (
    <div className="py-4 px-2">
      <div className="flex relative justify-between items-center">
        <h1 className="text-primary font-semibold">
          Characters & Voice Actors
        </h1>
        <button
          onClick={() => setSortedByMainRole(!sortedByMainRole)}
          className="flex items-center text-primary-foreground text-sm tracking-tight"
        >
          Sorted by {activeSorted}
          {sortedByMainRole ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        <AnimatePresence>
          {sortedByMainRole ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 z-10 top-6 w-[145px] h-fit bg-backgroundSecondary border shadow-md shadow-black"
            >
              <ul className="p-2 space-y-2">
                {dataSortedBy.map((item) => (
                  <li
                    className={cn(
                      "text-sm hover:text-secondary cursor-pointer",
                      activeSorted === item.name
                        ? "text-secondary"
                        : "text-primary"
                    )}
                    key={item.id}
                    onClick={() => handleClickSorted(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="border border-backgroundSecondary mt-0.5"></div>
      <div className="space-y-10 mt-4">
        {sortedData.map((item) => (
          <>
            <div className="w-full">
              <div className="flex items-center self-center gap-x-3">
                <Image
                  src={item.character.images.webp.image_url}
                  alt="Image Characters"
                  width={80}
                  height={180}
                  className="object-cover shadow-lg shadow-black"
                />
                <div className="space-y-4">
                  <Link
                    href="/#"
                    className="text-secondary font-semibold hover:underline"
                  >
                    {item.character.name}
                  </Link>
                  <h3 className="text-primary">{item.role}</h3>
                  <h3 className="text-primary-foreground">
                    {item.favorites} Favorites
                  </h3>
                </div>
              </div>
              <div className="w-full grid grid-cols-5 mt-5 gap-y-3">
                {item.voice_actors.map((subitem) => (
                  <div className="flex gap-x-1.5">
                    <div className="w-[55px] h-[85px] relative overflow-hidden shadow-lg shadow-black">
                      <Image
                        src={subitem.person.images.jpg.image_url}
                        alt="Image person"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link
                        href={"/#"}
                        className="truncate text-sm text-secondary hover:underline"
                      >
                        {subitem.person.name}
                      </Link>
                      <h4 className="truncate text-xs text-primary-foreground">
                        {subitem.language}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CharactersContent;
