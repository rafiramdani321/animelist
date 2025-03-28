import { getTopAnime } from "@/lib/anime-service";
import ResultsTopAiringAnime from "./results";

export default async function PageAnimeTopAiring() {
  const data = await getTopAnime({
    limit: 12,
    type: "tv",
    filter: "airing",
  });
  return <ResultsTopAiringAnime animes={data} />;
}
