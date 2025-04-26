"use client";

import React from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimeCard from "../_components/anime-card";
import { AnimeFullProps } from "@/types/anime-types";

interface AnimeSeasonNowProps {
  animes: {
    data: AnimeFullProps[];
  };
}

const ResultsTopAiringAnime = ({ animes }: AnimeSeasonNowProps) => {
  const [isClient, setIsClient] = React.useState(false);
  const isMedium = useMediaQuery("(max-width: 1023px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!animes || animes.data.length === 0) return null;

  return (
    <div>
      <div className="relative group px-2">
        <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10">
          Top Airing Anime
        </h2>
        <Link
          href={"/#"}
          className="uppercase italic text-[10px] block font-semibold text-secondary -mt-1 hover:underline cursor-pointer w-fit"
        >
          view more
        </Link>
        <h1 className="absolute tracking-wide text-5xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-2 md:-top-2.5 xl:-top-5 -left-3 md:-left-8 xl:-left-12 select-none pointer-events-none">
          Top Airing
        </h1>
      </div>

      {isMedium && isClient ? (
        <Carousel className="w-full overflow-hidden mt-1">
          <CarouselContent className="flex snap-x snap-mandatory p-3">
            {animes.data.map((result) => (
              <CarouselItem
                key={result.mal_id}
                className="basis-[calc(100%/2.3)] md:basis-[calc(100%/5.3)] lg:basis-[calc(100%/7.3)] snap-start"
              >
                <AnimeCard data={result} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : null}

      {isLarge && isClient ? (
        <div className="grid grid-cols-4 xl:grid-cols-6 w-full mt-1 p-3 gap-x-6 gap-y-6">
          {animes.data.map((result) => (
            <AnimeCard data={result} key={result.mal_id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ResultsTopAiringAnime;
