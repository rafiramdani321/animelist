"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { AnimeFullProps } from "@/types/anime-types";

interface AnimeTrailerProps {
  data: AnimeFullProps["trailer"];
}

const AnimeTrailer = ({ data }: AnimeTrailerProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative group">
      <h2 className="uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative">
        trailer
      </h2>
      <h1 className="absolute tracking-wide text-5xl md:text-6xl xl:text-[5rem] font-extrabold uppercase italic text-primary-foreground opacity-20 -top-1.5 md:-top-2.5 xl:-top-4 -left-3 md:-left-8 xl:-left-12 select-none -z-10">
        trailer
      </h1>

      <div className="w-full overflow-hidden mt-1.5 md:mt-1.5 xl:mt-2 z-20 relative p-1">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer w-[300px] h-[150px] text-primary hover:text-secondary"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail Image */}
            <Image
              src={data.images.maximum_image_url || data.images.large_image_url}
              alt="Anime Trailer Thumbnail"
              fill
              className="rounded-lg shadow-md shadow-background object-cover"
            />
            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
              <Play className="w-14 h-14 opacity-90" />
            </div>
          </div>
        ) : (
          <iframe
            className="w-[300px] h-[150px] rounded-lg shadow-md shadow-background"
            src={data.embed_url}
            title="Anime Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default AnimeTrailer;
