import { AnimeFullProps } from "@/types/anime-types";
import React from "react";

interface ReviewContentProps {
  data: AnimeFullProps;
}

const ReviewContent = ({ data }: ReviewContentProps) => {
  console.log(data);
  return <div>ReviewContent</div>;
};

export default ReviewContent;
