import React, { Suspense } from "react";

import PageAnimeSeasonNow from "./anime-season-now";
import { ResultsAnimeSkeleton } from "./anime-season-now/results";
import PageAnimeTopAiring from "./anime-top-airing";
import PageAnimeSchedule from "./anime-schedule";

export default function Page() {
  return (
    <div>
      <div className="px-4 mt-[47.5rem] md:mt-[53.5rem] xl:mt-[51rem] md:px-10 xl:px-64 space-y-14">
        <Suspense fallback={<ResultsAnimeSkeleton />}>
          <PageAnimeSeasonNow />
        </Suspense>
        <Suspense fallback={<ResultsAnimeSkeleton />}>
          <PageAnimeTopAiring />
        </Suspense>
      </div>
      <div className="px-4 md:px-10 xl:px-64 mt-8 bg-backgroundSecondary">
        <Suspense fallback={<ResultsAnimeSkeleton extraClass="py-10" />}>
          <PageAnimeSchedule />
        </Suspense>
      </div>
    </div>
  );
}
