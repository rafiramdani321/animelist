"use client";

import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import AnimeGenres from "./anime-genres";
import NavigationButtons, {
  NavigationButtonsSkeleton,
} from "./navigation-buttons";
import AnimeTrailer from "./anime-trailer";
import { AnimeFullProps } from "@/types/anime-types";

type AnimeHeaderCarouselProps = Pick<
  AnimeFullProps,
  | "title"
  | "title_japanese"
  | "title_english"
  | "synopsis"
  | "status"
  | "type"
  | "genres"
  | "trailer"
>;

const AnimeHeader = ({
  title,
  title_english,
  title_japanese,
  synopsis,
  status,
  type,
  genres,
  trailer,
}: AnimeHeaderCarouselProps) => {
  const displayTitle =
    title_english?.trim() || title?.trim() || title_japanese?.trim() || "-";

  const limitedGenres = genres?.slice(0, 3);
  return (
    <>
      <div className="absolute w-fit left-[1rem] md:left-[14rem] xl:left-[30rem] mt-2.5 bg-secondary/50 px-3 uppercase shadow-xl shadow-background mr-2">
        <h1 className="text-xs md:text-lg xl:text-3xl tracking-wide font-extrabold line-clamp-1">
          {displayTitle}
        </h1>
      </div>
      <div className="mt-[2.5rem] md:mt-[4.5rem] xl:mt-20 ml-3">
        <div className="flex mb-2 gap-x-1 xl:gap-x-3 text-[11px] md:text-[11px] xl:text-sm font-semibold tracking-tight">
          <h4 className="uppercase italic text-secondary">{status}</h4>
          <span>-</span>
          <h4 className="uppercase text-primary italic">{type}</h4>
        </div>

        <h3 className="uppercase text-primary-foreground italic font-semibold text-xs md:text-base">
          Description
        </h3>

        <div className="w-full md:w-full">
          <p className="text-primary font-light text-[11px] md:text-sm xl:text-base line-clamp-5">
            {synopsis}
          </p>
        </div>

        <AnimeGenres data={limitedGenres} />
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
