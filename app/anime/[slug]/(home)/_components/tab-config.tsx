import { AnimeCharactersFullProps, AnimeFullProps } from "@/types/anime-types";
import DetailContent from "./details-content";
import CharactersContent from "./characters";
import EpisodesContent from "./episodes";
import ReviewContent from "./review";
import RecommendationsContent from "./recommendations";

interface TabConfigProps {
  detailContent: AnimeFullProps;
  charactersContent: AnimeCharactersFullProps[];
}

export const getTabConfig = ({
  detailContent,
  charactersContent,
}: TabConfigProps) => [
  {
    slug: "details",
    label: "Details",
    component: (
      <DetailContent
        data={{
          score: detailContent.score,
          scored_by: detailContent.scored_by,
          members: detailContent.members,
          popularity: detailContent.popularity,
          rank: detailContent.rank,
          rating: detailContent.rating,
          season: detailContent.season,
          studios: detailContent.studios,
          synopsis: detailContent.synopsis,
          trailer: detailContent.trailer,
          type: detailContent.type,
          year: detailContent.year,
          background: detailContent.background,
        }}
      />
    ),
  },
  {
    slug: "characters",
    label: "Characters & Staff",
    component: <CharactersContent data={charactersContent} />,
  },
  {
    slug: "episodes",
    label: "Episodes",
    component: <EpisodesContent data={detailContent} />,
  },
  {
    slug: "reviews",
    label: "Reviews",
    component: <ReviewContent data={detailContent} />,
  },
  {
    slug: "recommendations",
    label: "Recommendations",
    component: <RecommendationsContent data={detailContent} />,
  },
];
