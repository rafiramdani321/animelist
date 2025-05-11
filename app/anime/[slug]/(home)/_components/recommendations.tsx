import { AnimeFullProps } from "@/types/anime-types";
import React from "react";

interface RecommendationsContentProps {
  data: AnimeFullProps;
}

const RecommendationsContent = ({ data }: RecommendationsContentProps) => {
  console.log(data);
  return <div>RecommendationsContent</div>;
};

export default RecommendationsContent;
