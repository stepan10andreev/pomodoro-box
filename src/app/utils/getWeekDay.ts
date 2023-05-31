export function getWeekDay(date: Date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

export function getWeekDayNameByIndex(index: number) {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  return days[index];
}

export function getWeekDayIndexByName(dayName: string): number {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  for (let i = 0; i < days.length; i++) {
    if (days[i].includes(dayName)) {
      return i;
    }
  }
  return 0;
}
