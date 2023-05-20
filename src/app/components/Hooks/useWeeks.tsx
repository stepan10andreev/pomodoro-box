import { useAppSelector } from "./useAppDispatch";


export function useWeeks () {
  const isCurrentWeek = useAppSelector((state) => state.weeks.currentWeek);
  const isLastWeek = useAppSelector((state) => state.weeks.lastWeek);
  const isTwoWeekAgo = useAppSelector((state) => state.weeks.twoWeekAgo);
  return {
    isCurrentWeek,
    isLastWeek,
    isTwoWeekAgo
  }
}

// // вариант через обьект с методами
// export const week = {
//   isCurrentWeek() {
//     return useAppSelector((state) => state.weeks.currentWeek);
//   },
//   isLastWeek() {
//     return useAppSelector((state) => state.weeks.lastWeek);
//   },
//   isTwoWeekAgo() {
//     return useAppSelector((state) => state.weeks.twoWeekAgo);
//   },
// }
