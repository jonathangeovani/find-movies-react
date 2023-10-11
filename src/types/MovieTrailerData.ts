export type MovieTrailerData = {
  id: number;
  results: [
    {
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
    }
  ];
};
