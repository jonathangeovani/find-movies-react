export type MovieCreditsData = {
  id: number;
  cast: [
    {
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
