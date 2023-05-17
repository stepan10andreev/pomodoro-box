import React from 'react';
import styles from './statisticstopwrapper.css';

interface IStatisticsTopWrapper {
  children?: React.ReactNode;
}

export function StatisticsTopWrapper({ children }: IStatisticsTopWrapper) {
  return (
    <div className={styles.top}>
      {children}
    </div>
  );
}
