import React from "react";
import Link from "next/link";

import { AnimeFullProps } from "@/types/anime-types";

interface AnimeCarouselGenresProps {
  data: AnimeFullProps["genres"];
}

const AnimeGenres = ({ data }: AnimeCarouselGenresProps) => {
  return (
    <div className="flex mt-2 gap-x-2">
      {data.map((result) => (
        <div
          className="text-secondary uppercase font-bold tracking-tight text-[10px] md:text-sm cursor-pointer hover:underline"
          key={result.mal_id}
        >
          <Link href={"/#"}>{result.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeGenres;
