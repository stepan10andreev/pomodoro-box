import React, { useEffect } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticsLink } from './StatisticsLink';
import { getWeekDay } from '../../utils/gerWeekDay';
import { useDispatch } from 'react-redux';
import { setTodayDate } from '../../store/todayState/todayState';
import { useAppSelector } from '../Hooks/useAppDispatch';



export function Header() {
  const dispatch = useDispatch();
  const isToday = useAppSelector(state => state.today.day);

  useEffect(() => {
    if (isToday) return
    const NOW = new Date();
    dispatch(setTodayDate(getWeekDay(NOW), NOW.getTime()))
    console.log('here')
  }, [])

  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
    </header>
  );
}
