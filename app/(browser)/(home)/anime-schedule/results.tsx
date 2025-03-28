"use client";

import React from "react";
import Link from "next/link";

import { Anime } from "@/types/anime-types";
import AnimeCard from "../_components/anime-card";

interface AnimeScheduleResultsProps {
  animes: {
    data: Anime[];
  };
}

const AnimeScheduleResults = ({ animes }: AnimeScheduleResultsProps) => {
  const day = new Date().toLocaleDateString("en", { weekday: "long" });

  if (!animes || animes.data.length === 0) return null;

  return (
    <div className="px-2 py-10">
      <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10">
        Schedule anime
      </h2>
      <Link
        href={"/#"}
        className="uppercase italic text-[10px] block font-semibold text-secondary -mt-0.5 hover:underline cursor-pointer w-fit"
      >
        view more
      </Link>

      <div className="mt-2">
        <div className="flex justify-center mb-3">
          <h1 className="uppercase text-xl font-bold italic text-primary-foreground">
            {day}
          </h1>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full mt-1 p-3 gap-x-5 gap-y-5">
          {animes.data.map((result) => (
            <AnimeCard data={result} key={result.mal_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeScheduleResults;
