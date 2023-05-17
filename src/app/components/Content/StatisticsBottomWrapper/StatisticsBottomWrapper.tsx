import React from 'react';
import styles from './statisticsbottomwrapper.css';

interface IStatisticsBottomWrapper {
  children?: React.ReactNode;
}

export function StatisticsBottomWrapper({ children }: IStatisticsBottomWrapper) {
  return (
    <div className={styles.bottom}>
      {children}
    </div>
  );
}
