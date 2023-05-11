import React from 'react';
import styles from './tasklist.css';

interface ITaskListProps {
  children?: React.ReactNode;
}

export function TaskList({ children }: ITaskListProps) {
  return (
    <ul>
      {children}
    </ul>
  );
}
