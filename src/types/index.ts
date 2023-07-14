export type videoList = {
  results: [
    {
      key: string;
      site: string;
      type: string;
      name: string;
    }
  ];
};

export type castList = {
  cast: { name: string }[];
  crew: { job: string; name: string }[];
};

export type Movies = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  adult: boolean;
  genres: { id: number; name: string }[];
  overview: string;
  videos: videoList;
  casts: castList;
};
