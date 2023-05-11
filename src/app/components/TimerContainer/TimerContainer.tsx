import React from 'react';
import styles from './timerContainer.css';

interface ITimerContainerProps {
  children?: React.ReactNode;
}

export function TimerContainer({ children }: ITimerContainerProps) {
  return (
    <div className={styles.timerContainer}>
      {children}
    </div>
  );
}
