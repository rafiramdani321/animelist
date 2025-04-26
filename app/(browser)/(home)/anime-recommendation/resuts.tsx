"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import { AnimeRecommendationProps } from "@/types/anime-types";

interface AnimeRecommendationResultsProps {
  data: AnimeRecommendationProps[];
}

export const AnimeRecommendationResults = ({
  data,
}: AnimeRecommendationResultsProps) => {
  return (
    <div>
      <div className="relative group px-2">
        <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10">
          latest anime recommendations
        </h2>
        <Link
          href={"/#"}
          className="uppercase italic text-[10px] block font-semibold text-secondary -mt-1 hover:underline cursor-pointer w-fit"
        >
          view more
        </Link>
        <h1 className="absolute tracking-wide text-5xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-2 md:-top-2.5 xl:-top-5 -left-3 md:-left-8 xl:-left-12 select-none pointer-events-none">
          anime recom
        </h1>
      </div>

      <div>
        {data.map((result) => (
          <div key={result.mal_id} className="border-t border-b mt-4 py-2">
            <div className="grid grid-cols-2">
              {result.entry.map((item) => (
                <div key={item.mal_id} className="flex gap-x-2 items-center">
                  <Image
                    src={item.images.webp.large_image_url}
                    alt="Image anime"
                    width={70}
                    height={110}
                    className="object-cover shadow-lg shadow-backgroundSecondary"
                  />
                  <Link
                    href={"/#"}
                    className="text-secondary text-xs md:text-sm font-semibold tracking-tight hover:underline line-clamp-4"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-1.5">
              <p className="text-primary text-[11px] md:text-xs font-light line-clamp-2 md:line-clamp-none xl:line-clamp-none">
                {result.content}
              </p>
              <div className="flex justify-between w-full mt-4">
                <Link
                  href={"/#"}
                  className="text-[11px] md:text-xs text-primary-foreground underline hover:text-secondary"
                >
                  view more
                </Link>
                <div className="flex gap-x-1">
                  <p className="text-[11px] md:text-xs text-primary-foreground">
                    anime rec by
                  </p>
                  <Link
                    href={"/#"}
                    className="text-[11px] text-secondary font-semibold hover:underline"
                  >
                    {result.user.username}
                  </Link>
                  <p className="text-[11px] text-primary-foreground">
                    {formatDistanceToNow(new Date(result.date), {
                      addSuffix: true,
                    }).replace(/^about\s/, "")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
