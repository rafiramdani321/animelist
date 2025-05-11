"use client";

import React from "react";
import Image from "next/image";

import { AppBreadCrumb } from "@/components/app-breadcrumb";
import { AnimeCharactersFullProps, AnimeFullProps } from "@/types/anime-types";
import TabNavigations from "./_components/tab-navigations";
import { useTabDetailsAnime } from "@/store/use-tab-detailanime";
import { getTabConfig } from "./_components/tab-config";

interface DetailsAnimeProps {
  detailAnimeContent: AnimeFullProps;
  charactersAnime: AnimeCharactersFullProps[];
}

const DetailsAnime = ({
  detailAnimeContent,
  charactersAnime,
}: DetailsAnimeProps) => {
  const { activeTab, hasHydrated } = useTabDetailsAnime();
  const tabConfig = getTabConfig({
    detailContent: detailAnimeContent,
    charactersContent: charactersAnime,
  });
  const currentTab = tabConfig.find((tab) => tab.slug === activeTab);

  let content;
  if (!hasHydrated) {
    content = "Loading"; // change with skeleton soon
  } else {
    content = currentTab?.component ?? tabConfig[0].component;
  }
  return (
    <div className="w-full">
      <AppBreadCrumb />
      <div className="mt-10 space-y-0">
        <h1 className="text-secondary text-2xl font-semibold">
          {detailAnimeContent.title}
        </h1>
        <h2 className="text-primary-foreground text-base font-semibold">
          {detailAnimeContent.title_english}
        </h2>
      </div>
      <div className="flex mt-2 gap-x-3">
        <div>
          <Image
            alt="Image Anime"
            src={detailAnimeContent.images.webp.large_image_url}
            width={300}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <div className="border">
            <TabNavigations tabs={tabConfig} />
          </div>
          <div className="border h-full">
            <div className="px-2 py-1">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsAnime;
