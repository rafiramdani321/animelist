import { getAnimeReviews } from "@/lib/anime-service";
import { AnimeReviewResults } from "./results";

export default async function PageAnimeReview() {
  const data = await getAnimeReviews({ preliminary: true, spoilers: true });
  const dataSlice = data.data.slice(0, 4);
  return <AnimeReviewResults data={dataSlice} />;
}
