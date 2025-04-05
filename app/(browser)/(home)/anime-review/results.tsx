"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface AnimeReviewProps {
  data: {
    mal_id: number;
    url: string;
    reactions: {
      overall: number;
      nice: number;
      love_it: number;
      funny: number;
      confusing: number;
      informative: number;
      well_written: number;
      creative: number;
    };
    date: string;
    review: string;
    score: number;
    tags: [];

    entry: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title: string;
    };
    user: {
      url: string;
      username: string;
      images: {
        jpg: {
          image_url: string;
        };
        webp: {
          image_url: string;
        };
      };
    };
  }[];
}

export const AnimeReviewResults = ({ data }: AnimeReviewProps) => {
  return (
    <div>
      <div className="relative group px-2">
        <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10">
          anime reviews
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

      {data.map((result) => (
        <div
          className="border-backgroundSecondary border-t border-b mt-4"
          key={result.mal_id}
        >
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
                <h2 className="text-secondary text-xs font-semibold tracking-tight">
                  {result.entry.title}
                </h2>
                <p className="line-clamp-4 text-[11px] text-primary tracking-tight mt-2">
                  {result.review}
                </p>
                <div className="flex justify-between mt-2">
                  <Link
                    href={"/#"}
                    className="text-[11px] text-primary-foreground hover:text-secondary tracking-tight underline"
                  >
                    view more
                  </Link>
                  <div className="flex gap-x-1">
                    <h2 className="text-[11px] text-primary-foreground">
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
  );
};
