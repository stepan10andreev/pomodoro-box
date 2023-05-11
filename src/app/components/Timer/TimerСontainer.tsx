import React from 'react';
import styles from './timer.css';

interface ITimerСontainerProps {
  children?: React.ReactNode;
}

export function TimerСontainer({ children }: ITimerСontainerProps) {
  return (
    <div className={styles.timer}>
      {children}
    </div>
  );
}
