import React, { useEffect } from 'react';
import styles from './themeswitcher.css';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../store/theme/theme';

export function ThemeSwitcher() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [ theme ])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(next));
  }

  return (
    <label className={styles.switcher} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={handleChange}
        checked={theme === 'dark'}
        readOnly
      />
      <span className={styles.slider} >
        <span className={styles.lightThemeIcon + `${theme === 'light' ? ' ' + styles.hidden : ''}`}>🌞</span>
        <span className={styles.darkThemeIcon + `${theme === 'dark' ? ' ' + styles.hidden : ''}`}>🌚</span>
      </span>
      <span className={styles.wave} />
    </label>
  );
}
