import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticsLink } from './StatisticsLink';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <StatisticsLink />
    </header>
  );
}
