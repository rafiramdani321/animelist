"use client";

import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import AnimeGenres from "./anime-genres";
import NavigationButtons, {
  NavigationButtonsSkeleton,
} from "./navigation-buttons";
import AnimeTrailer from "./anime-trailer";

interface headerProps {
  title: string;
  title_english: string;
  title_japanese: string;
  synopsis: string;
  status: string;
  type: string;
  episodes: number;
  genres: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
}

const AnimeHeader = ({
  title,
  title_english,
  title_japanese,
  synopsis,
  status,
  type,
  episodes,
  genres,
  trailer,
}: headerProps) => {
  const displayTitle =
    title_english?.trim() || title?.trim() || title_japanese?.trim() || "-";

  const limitedGenres = genres?.slice(0, 3);
  return (
    <>
      <div className="absolute left-[9rem] md:left-[14rem] xl:left-[30rem] mt-4 line-clamp-1 bg-secondary/50 px-3 uppercase shadow-xl shadow-background">
        <h1 className="text-sm md:text-xl xl:text-3xl tracking-wide font-extrabold">
          {displayTitle}
        </h1>
      </div>
      <div className="mt-[3.5rem] md:mt-[4.5rem] xl:mt-20 ml-7">
        <div className="flex mb-3 gap-x-1 line-clamp-1 xl:gap-x-3 text-[11px] md:text-[11px] xl:text-sm font-semibold tracking-tight">
          <h4 className="uppercase italic text-secondary">{status}</h4>
          <span>-</span>
          <h4 className="uppercase text-primary italic">{type}</h4>
          <span>-</span>
          <h4 className="text-primary-foreground">{episodes} Episodes</h4>
        </div>

        <h3 className="uppercase text-primary-foreground italic font-semibold text-sm md:text-base">
          Description
        </h3>

        <div className="w-[250px] md:w-full">
          <p className="text-primary font-normal text-xs md:text-sm xl:text-base line-clamp-5">
            {synopsis}
          </p>
        </div>

        <AnimeGenres genres={limitedGenres} />
        <div className="w-full flex justify-between gap-x-4">
          <NavigationButtons />
          <div className="hidden xl:block mt-10">
            <AnimeTrailer data={trailer} />
          </div>
        </div>
      </div>
    </>
  );
};

export const AnimeHeaderSkeleton = () => {
  return (
    <>
      <div className="mt-2 xl:mt-4 ml-4 xl:ml-7">
        <Skeleton className="w-[210px] h-7 md:w-[350px] xl:w-[700px] xl:h-10 mb-4 xl:mb-7" />
        <div className="flex mb-4 xl:mb-7 gap-x-3">
          <Skeleton className="w-[35px] h-3 xl:w-[80px] xl:h-5" />
          <Skeleton className="w-[35px] h-3 xl:w-[80px] xl:h-5" />
          <Skeleton className="w-[35px] h-3 xl:w-[80px] xl:h-5" />
        </div>
        <Skeleton className="w-[100px] h-4 xl:w-[160px] xl:h-5 mb-3" />
        <div className="space-y-2 mb-4 xl:mb-7 w-full">
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
          <Skeleton className="w-[210px] md:w-[400px] xl:w-[850px] h-3" />
        </div>
        <div className="flex mb-4 gap-x-3">
          <Skeleton className="w-[40px] h-4 xl:w-[80px] xl:h-6 rounded-xl" />
          <Skeleton className="w-[40px] h-4 xl:w-[80px] xl:h-6 rounded-xl" />
          <Skeleton className="w-[40px] h-4 xl:w-[80px] xl:h-6 rounded-xl" />
        </div>
        <div className="w-full flex justify-between gap-x-4">
          <NavigationButtonsSkeleton />
          <div className="hidden xl:block mt-10">
            <Skeleton className="w-[230px] h-[150px] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeHeader;
