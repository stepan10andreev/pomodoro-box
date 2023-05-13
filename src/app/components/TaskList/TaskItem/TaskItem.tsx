import React from 'react';
import styles from './taskitem.css';
import { Text } from '../../Text'
import { ButtonMenu } from './ButtonMenu';

interface ITaskItem {
  taskTitle: string;
  countTomato: number;
}
export function TaskItem({ taskTitle, countTomato }: ITaskItem) {
  return (
    <li className={styles.taskItem}>
      <div className={styles.countTomatoes}>
        {countTomato}
      </div>
      <Text size={16} weight={300}>{taskTitle}</Text>
      <ButtonMenu />
    </li>
  );
}

