import React from 'react';
import styles from './taskitem.css';
import { Text } from '../../Text'
import { ButtonMenu } from './ButtonMenu';

export function TaskItem() {
  return (
    <li className={styles.taskItem}>
      <div className={styles.countTomatoes}>
        1
      </div>
      <Text size={16} weight={300}>Сверстать сайт</Text>
      <ButtonMenu />
    </li>
  );
}
