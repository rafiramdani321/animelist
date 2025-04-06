import { getAnimeRecommendations } from "@/lib/anime-service";
import { AnimeRecommendationResults } from "./resuts";

export default async function PageAnimeRecommendations() {
  const data = await getAnimeRecommendations();
  const dataSlice = data.data.slice(0, 4);
  return <AnimeRecommendationResults data={dataSlice} />;
}
