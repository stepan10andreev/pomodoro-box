import React, { useEffect } from 'react';
import styles from './themeswitcher.css';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../store/theme/theme';

export function ThemeSwitcher() {

  const theme = useAppSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(theme)
    document.documentElement.dataset.theme = theme
  }, [ theme ])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(next))
  }

  return (
    <div
      className={theme === 'dark' ? styles.root + ' ' +  styles.dark : styles.root + ' ' + styles.light}
      onClick={handleChange}
    />
  );
}
