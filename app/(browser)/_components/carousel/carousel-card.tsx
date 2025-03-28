"use client";

import React from "react";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

import { Anime } from "@/types/anime-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimeHeader, { AnimeHeaderSkeleton } from "./anime-header";
import AnimeTrailer from "./anime-trailer";
import BackgroundImage from "./background-image";
import { Skeleton } from "@/components/ui/skeleton";

interface CarouselCardProps {
  animes: {
    data: Anime[];
  };
}

const CarouselCard = ({ animes }: CarouselCardProps) => {
  const plugin = React.useRef(
    AutoPlay({
      delay: 5000,
      stopOnInteraction: true,
    })
  );

  if (!animes || !animes.data || animes.data.length === 0) return;

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {animes.data.map((result) => (
          <CarouselItem key={result.mal_id}>
            <div className="w-full h-full relative pt-8 pb-12 px-4 md:px-10 xl:px-56 z-10 mt-11">
              <div className="flex">
                <div className="w-[180px] md:w-[250px] xl:w-[300px] flex-shrink-0 relative">
                  <div className="shadow-xl rounded-md border shadow-background">
                    <Image
                      alt="test"
                      src={result.images.webp.large_image_url}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
                <AnimeHeader
                  title={result.title}
                  title_english={result.title_english}
                  title_japanese={result.title_japanese}
                  synopsis={result.synopsis}
                  status={result.status}
                  type={result.type}
                  episodes={result.episodes}
                  genres={result.genres}
                  trailer={result.trailer}
                />
              </div>
              <div className="flex xl:hidden mt-12">
                <AnimeTrailer data={result.trailer} />
              </div>
              <BackgroundImage images={result.images} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export const CarouselCardSkeleton = () => {
  return (
    <div className="w-full h-full relative pt-8 pb-12 px-4 md:px-10 xl:px-56 z-10 mt-11">
      <div className="flex">
        <div className="w-[180px] md:w-[250px] xl:w-[300px] flex-shrink-0 relative">
          <div className="shadow-xl rounded-md border shadow-background">
            <Skeleton className="w-[180px] h-[250px] md:w-[250px] md:h-[300px] xl:w-[300px] xl:h-[400px] rounded-md" />
          </div>
        </div>
        <AnimeHeaderSkeleton />
      </div>

      <div className="flex xl:hidden mt-12">
        <Skeleton className="w-[230px] h-[140px] rounded-md" />
      </div>
    </div>
  );
};

export default CarouselCard;
