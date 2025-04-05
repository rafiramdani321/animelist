import { getAnimeSchedules } from "@/lib/anime-service";
import { AnimeScheduleParams } from "@/types/anime-types";
import AnimeScheduleResults from "./results";

export default async function PageAnimeSchedule() {
  const day = new Date().toLocaleDateString("en", { weekday: "long" });
  const dayLowerCase = day.toLocaleLowerCase() as AnimeScheduleParams["filter"];

  const data = await getAnimeSchedules({
    filter: dayLowerCase,
    limit: 6,
  });

  return <AnimeScheduleResults animes={data} />;
}
