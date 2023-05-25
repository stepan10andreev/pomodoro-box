import React, { useEffect } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticsLink } from './StatisticsLink';
import { getWeekDay } from '../../utils/getWeekDay';
import { useDispatch } from 'react-redux';
import { setTodayDate } from '../../store/entryDateState/entryDateState';
import { useAppSelector } from '../Hooks/useAppDispatch';

const NOW = new Date();
const x = new Date('2023-05-25')
const diff = NOW.getTime() - x.getTime();
console.log(new Date(diff))

export function Header() {
  const dispatch = useDispatch();
  const isLastEntry = useAppSelector(state => state.entryDate.dayName);
  // const lastEntryDay = useAppSelector(state => state.entryDate.day);
  // const lastEntryMonth = useAppSelector(state => state.entryDate.month);
  // const lastEntryYear = useAppSelector(state => state.entryDate.year);
  // const dayStatistics = useAppSelector(state => state.dayStatistics)

  useEffect(() => {
    if (isLastEntry) return;
    const NOW = new Date();
    dispatch(setTodayDate(getWeekDay(NOW), NOW.getDate(), NOW.getTime(), NOW.getMonth(), NOW.getFullYear()))
    console.log('here')
  }, [])



  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
    </header>
  );
}
