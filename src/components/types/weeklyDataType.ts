export interface WeeklyDataType {
  weeklyData: {
    date: string;
    day: string;
    work: { task: string; project: string; hours: number }[];
  };
}

export type WeeklyDataPassType = {
  date: string;
  day: string;
  work: { task: string; project: string; hours: number }[];
};
