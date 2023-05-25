import React, { useEffect } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticsLink } from './StatisticsLink';
import { getWeekDay } from '../../utils/getWeekDay';
import { useDispatch } from 'react-redux';
import { setTodayDate } from '../../store/entryDateState/entryDateState';
import { useAppSelector } from '../Hooks/useAppDispatch';



export function Header() {
  const dispatch = useDispatch();
  const lastEntry = useAppSelector(state => state.entryDate.day);

  useEffect(() => {
    if (lastEntry) return
    const NOW = new Date();
    dispatch(setTodayDate(getWeekDay(NOW), NOW.getDate(), NOW.getTime()))
    console.log('here')
  }, [])

  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
    </header>
  );
}
