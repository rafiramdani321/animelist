import React from "react";

import { getTopAnime } from "@/lib/anime-service";
import CarouselCard, { CarouselCardSkeleton } from "./carousel-card";

const PageCarousel = async () => {
  const data = await getTopAnime({ limit: 3 });
  return <CarouselCard data={data.data} />;
};

export const PageCarouselSkeleton = () => {
  return <CarouselCardSkeleton />;
};

export default PageCarousel;
