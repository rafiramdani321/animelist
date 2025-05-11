"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { AnimeFullProps } from "@/types/anime-types";
import { generateSlug } from "@/lib/utils";
import { useTabDetailsAnime } from "@/store/use-tab-detailanime";

interface AnimeProps {
  data: Pick<AnimeFullProps, "mal_id" | "title" | "images">;
}

const AnimeCard = ({ data }: AnimeProps) => {
  const { setActiveTab } = useTabDetailsAnime();
  return (
    <Link
      onClick={() => setActiveTab("details")}
      href={`/anime/${generateSlug(data.title)}-${data.mal_id}`}
      className="border-transparent overflow-hidden shadow-md shadow-black rounded-sm hover:shadow-secondary"
    >
      <div className="relative rounded-sm w-full aspect-[3/4]">
        <Image
          alt={data.title}
          src={data.images.webp.large_image_url}
          fill
          className=""
        />
        <div className="absolute inset-x-0 bottom-0 w-full bg-gradient-to-t from-backgroundSecondary to-transparent text-primary px-2 py-1">
          <h1 className="truncate text-primary text-sm font-semibold">
            {data.title}
          </h1>
          <p className="truncate text-primary-foreground text-xs font-semibold">
            {"2024"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const AnimeCardSkeleton = () => {
  return (
    <div className="border-transparent overflow-hidden shadow-lg shadow-black rounded-sm w-full">
      <div className="relative rounded-sm w-full aspect-[3/4]">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-x-0 bottom-0 w-full bg-gradient-to-t from-backgroundSecondary to-transparent px-2 py-1">
          <Skeleton className="w-3/4 h-4 mb-1" />
          <Skeleton className="w-1/3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
