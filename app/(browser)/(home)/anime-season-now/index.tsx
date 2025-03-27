import { getAnimeSeasonNow } from "@/lib/anime-service";
import React from "react";
import ResultsTopSeasonNow from "./results";

export default async function PageAnimeSeasonNow() {
  const data = await getAnimeSeasonNow({ limit: 12 });
  return <ResultsTopSeasonNow animes={data} />;
}
