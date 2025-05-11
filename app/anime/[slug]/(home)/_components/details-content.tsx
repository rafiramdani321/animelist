import { AnimeFullProps } from "@/types/anime-types";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DetailsContentProps {
  data: Pick<
    AnimeFullProps,
    | "score"
    | "scored_by"
    | "rank"
    | "rating"
    | "popularity"
    | "members"
    | "studios"
    | "synopsis"
    | "trailer"
    | "season"
    | "year"
    | "type"
    | "background"
  >;
}

const DetailContent = ({ data }: DetailsContentProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div className="w-full px-1 py-2">
      <div className="flex justify-between gap-x-5">
        <div className="flex py-3 px-4 gap-x-6 bg-backgroundSecondary w-full">
          <div className="text-center items-center self-center">
            <div className="bg-secondary/50">
              <h3 className="px-5 uppercase text-primary text-xs">score</h3>
            </div>
            <h1 className="text-3xl mt-1.5 font-bold">{data.score}</h1>
            <h2 className="text-xs text-primary-foreground">
              {data.scored_by} users
            </h2>
          </div>
          <div className="border border-primary-foreground/10"></div>
          <div className="block self-center space-y-6">
            <div className="flex gap-x-4 text-primary text-xl">
              <h2>
                Ranked <span className="font-semibold">#{data.rank}</span>
              </h2>
              <h2>
                Popularity{" "}
                <span className="font-semibold">#{data.popularity}</span>
              </h2>
              <h2>
                Members <span className="font-semibold">{data.members}</span>
              </h2>
            </div>
            <div className="flex gap-x-4">
              <Link
                href={"/#"}
                className="text-primary-foreground hover:text-secondary text-xs"
              >
                {data.season + " " + data.year}
              </Link>
              <div className="border border-primary-foreground/10"></div>
              <Link
                href={"/#"}
                className="text-primary-foreground hover:text-secondary text-xs"
              >
                {data.type}
              </Link>
              <div className="border border-primary-foreground/10"></div>
              {data?.studios?.map((item, index) => (
                <>
                  <Link
                    href={"/#"}
                    key={item.mal_id}
                    className="text-primary-foreground hover:text-secondary text-xs"
                  >
                    {item.name}
                  </Link>
                  {index < data.studios.length - 1 && (
                    <span className="text-primary text-xs">-</span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          {!isPlaying ? (
            <div
              className="cursor-pointer group w-[220px] h-[120px]"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={
                  data.trailer.images.maximum_image_url ||
                  data.trailer.images.large_image_url
                }
                alt="Anime Trailer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                <div className="bg-black/50 flex border border-primary-foreground ">
                  <div className="px-2 py-1 flex">
                    <Play className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                    <p className="text-xs text-primary group-hover:text-secondary transition-colors">
                      Play
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-[220px] h-[120px] shadow-md shadow-background"
              src={data.trailer.embed_url}
              title="Anime Trailer"
              allow="accelerometer; autoplay; clipboard-write; ecrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="mt-10">
        <div className="relative group">
          <h2 className="uppercase italic text-base text-secondary font-bold relative z-10">
            Sysnopsis
          </h2>
          <h1 className="absolute tracking-wide text-5xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-1 left-2 select-none pointer-events-none">
            Sysnopsis
          </h1>
        </div>
        <p className="text-sm tracking-wide font-light text-primary">
          {data.synopsis}
        </p>
      </div>
      <div className="mt-10">
        <div className="relative group">
          <h2 className="uppercase italic text-base text-secondary font-bold relative z-10">
            Background
          </h2>
          <h1 className="absolute tracking-wide text-5xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-1 left-2 select-none pointer-events-none">
            Background
          </h1>
        </div>
        <p className="text-sm tracking-wide font-light text-primary">
          {data.background}
        </p>
      </div>
    </div>
  );
};

export default DetailContent;
