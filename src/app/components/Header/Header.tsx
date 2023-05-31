import React, { useEffect } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticsLink } from './StatisticsLink';
import { getWeekDay } from '../../utils/getWeekDay';
import { useDispatch } from 'react-redux';
import { setTodayDate } from '../../store/entryDateState/entryDateState';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { ThemeSwitcher } from './ThemeSwitcher';
import { SettingsLink } from './SettingsLink';

export function Header() {
  const isLastEntry = useAppSelector(state => state.entryDate.dayName);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLastEntry) return;
    const NOW = new Date();
    dispatch(setTodayDate(getWeekDay(NOW), NOW.getDate(), NOW.getTime(), NOW.getMonth(), NOW.getFullYear()));
  }, [])

  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
      <SettingsLink />
      <ThemeSwitcher />
    </header>
  );
}
