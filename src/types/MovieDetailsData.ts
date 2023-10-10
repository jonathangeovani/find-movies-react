export type MovieDetailsData = {
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: [{}];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
};
