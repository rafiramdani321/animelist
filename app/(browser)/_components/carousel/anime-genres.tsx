import Link from "next/link";
import React from "react";

interface animeGenresProps {
  genres: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
}

const AnimeGenres = ({ genres }: animeGenresProps) => {
  return (
    <div className="flex mt-2 gap-x-2">
      {genres.map((result) => (
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
