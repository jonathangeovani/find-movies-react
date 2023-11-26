export type MovieCreditsData = {
  id: number;
  cast: [
    {
      id: number;
      name: string;
      profile_path: string;
      character: string;
    }
  ];
  crew: [
    {
      name: string;
      department: string;
    }
  ];
};
