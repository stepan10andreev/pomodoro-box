import { IDays } from "../store/statisticsData/statisticsData";

export function getSumWeeksStatParameters(week: IDays[], parameter: string): number {
  const result = week.reduce((acc: number, day: IDays) => acc + +day[parameter], 0);
  return result;
}
