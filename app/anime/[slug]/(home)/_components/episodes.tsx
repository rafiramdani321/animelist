import { AnimeFullProps } from "@/types/anime-types";
import React from "react";

interface EpisodesContentProps {
  data: AnimeFullProps;
}

const EpisodesContent = ({ data }: EpisodesContentProps) => {
  console.log(data);
  return <div>EpisodesContent</div>;
};

export default EpisodesContent;
