"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import { AnimeReviewProps } from "@/types/anime-types";

interface AnimeReviewResultsProps {
  data: Pick<
    AnimeReviewProps,
    "mal_id" | "entry" | "review" | "date" | "user"
  >[];
}

export const AnimeReviewResults = ({ data }: AnimeReviewResultsProps) => {
  return (
    <div>
      <div className="relative group px-2">
        <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10">
          latest anime reviews
        </h2>
        <Link
          href={"/#"}
          className="uppercase italic text-[10px] block font-semibold text-secondary -mt-1 hover:underline cursor-pointer w-fit"
        >
          view more
        </Link>
        <h1 className="absolute tracking-wide text-5xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-2 md:-top-2.5 xl:-top-5 -left-3 md:-left-8 xl:-left-12 select-none pointer-events-none">
          anime reviews
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-3">
        {data.map((result) => (
          <div className="border-t border-b mt-4" key={result.mal_id}>
            <div className="py-3">
              <div className="flex gap-x-2">
                <Image
                  src={result.entry.images.webp.large_image_url}
                  alt="Image anime"
                  width={70}
                  height={110}
                  className="object-cover shadow-lg shadow-backgroundSecondary"
                />
                <div>
                  <Link
                    href={result.entry.url}
                    className="text-secondary text-xs md:text-sm font-semibold tracking-tight line-clamp-1 hover:underline"
                  >
                    {result.entry.title}
                  </Link>
                  <p className="line-clamp-4 text-[11px] md:text-xs text-primary font-light mt-1.5">
                    {result.review}
                  </p>
                  <div className="flex justify-between mt-4">
                    <Link
                      href={"/#"}
                      className="text-[11px] md:text-xs text-primary-foreground hover:text-secondary tracking-tight underline"
                    >
                      view more
                    </Link>
                    <div className="flex gap-x-1">
                      <h2 className="text-[11px] md:text-xs text-primary-foreground">
                        {formatDistanceToNow(new Date(result.date), {
                          addSuffix: true,
                        }).replace(/^about\s/, "")}{" "}
                        By
                      </h2>
                      <Link
                        href={"/#"}
                        className="text-[11px] text-secondary font-semibold hover:underline"
                      >
                        {result.user.username}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
