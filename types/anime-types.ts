export type AnimeTopParams = {
  type?:
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  page?: number;
  limit?: number;
};

export interface AnimeSeasonNowParams {
  filter?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  sfw?: boolean;
  unapproved?: boolean;
  continuing?: boolean;
  page?: number;
  limit?: number;
}

export interface Anime {
  mal_id: number;
  title: string;
  title_english: string;
  title_japanese: string;
  synopsis: string;
  status: string;
  type: string;
  episodes: number;
  season: string;
  year: number;
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
    webp: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
}

export interface AnimeScheduleParams {
  limit?: number;
  page?: number;
  filter?:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
    | "unknown"
    | "other";
}

export interface AnimeReviewsParams {
  page?: number;
  preliminary?: boolean;
  spoilers?: boolean;
}
