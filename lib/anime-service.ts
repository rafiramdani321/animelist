import {
  AnimeRecommendationParams,
  AnimeReviewsParams,
  AnimeScheduleParams,
  AnimeSeasonNowParams,
  AnimeTopParams,
} from "@/types/anime-types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getTopAnime(params: Partial<AnimeTopParams> = {}) {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    ) as Record<string, string>;

    const queryString = new URLSearchParams(filteredParams).toString();
    const response = await fetch(`${SITE_URL}/api/anime/top?${queryString}`, {
      cache: "no-store",
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching top anime:", error);
    return { data: [], pagination: {} };
  }
}

export async function getAnimeSeasonNow(
  params: Partial<AnimeSeasonNowParams> = {}
) {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    ) as Record<string, string>;

    const queryString = new URLSearchParams(filteredParams).toString();
    const response = await fetch(
      `${SITE_URL}/api/anime/season-now?${queryString}`,
      {
        cache: "no-store",
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching anime season now:", error);
    return { data: [], pagination: {} };
  }
}

export async function getAnimeSchedules(
  params: Partial<AnimeScheduleParams> = {}
) {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    ) as Record<string, string>;

    const queryString = new URLSearchParams(filteredParams).toString();
    const response = await fetch(
      `${SITE_URL}/api/anime/schedule?${queryString}`,
      {
        cache: "no-store",
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching anime schedule:", error);
    return { data: [], pagination: {} };
  }
}

export async function getAnimeReviews(
  params: Partial<AnimeReviewsParams> = {}
) {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, String(v)])
    );

    const queryString = new URLSearchParams(filteredParams).toString();
    const response = await fetch(
      `${SITE_URL}/api/anime/review?${queryString}`,
      {
        cache: "no-store",
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching anime reviews:", error);
    return { data: [], pagination: {} };
  }
}

export async function getAnimeRecommendations(
  params: Partial<AnimeRecommendationParams> = {}
) {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, String(v)])
    );

    const queryString = new URLSearchParams(filteredParams).toString();
    const response = await fetch(
      `${SITE_URL}/api/anime/recommendation?${queryString}`,
      {
        cache: "no-store",
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching anime recommendations:", error);
    return { data: [], pagination: {} };
  }
}

export async function getAnimeFullById(id: number) {
  try {
    const response = await fetch(`${SITE_URL}/api/anime/${id}/full`, {
      cache: "no-store",
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching anime by id:", error);
    return { data: [], pagination: {} };
  }
}
