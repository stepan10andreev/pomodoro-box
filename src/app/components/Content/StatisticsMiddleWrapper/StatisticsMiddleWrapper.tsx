import React from 'react';
import styles from './statisticsmiddlewrapper.css';

interface IStatisticsMiddleWrapper {
  children?: React.ReactNode;
}

export function StatisticsMiddleWrapper({ children }: IStatisticsMiddleWrapper) {
  return (
    <div className={styles.middle}>
      {children}
    </div>
  );
}
