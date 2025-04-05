"use client";

import React from "react";

import { Anime } from "@/types/anime-types";
import AnimeCard from "../_components/anime-card";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative">
          Schedule anime
        </h2>
        <h1 className="uppercase text-base font-bold italic text-secondary">
          {day}
        </h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full mt-8 p-3 gap-x-3 gap-y-3">
        {animes.data.map((result) => (
          <AnimeCard data={result} key={result.mal_id} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant="default"
          size="default"
          className="uppercase rounded-none shadow-md shadow-background hover:shadow-md hover:shadow-secondary"
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default AnimeScheduleResults;
