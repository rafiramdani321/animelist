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
    <div className="flex mt-4 gap-x-2 xl:gap-x-3">
      {genres.map((result) => (
        <div
          className="border-2 self-center border-secondary/50 text-primary text-[11px] md:text-sm rounded-full cursor-pointer hover:bg-secondary/50 hover:border-secondary"
          key={result.mal_id}
        >
          <h4 className="py-1 px-2">{result.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default AnimeGenres;
