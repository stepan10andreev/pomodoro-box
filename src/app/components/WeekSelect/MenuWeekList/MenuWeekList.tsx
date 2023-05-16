import React from 'react';
import styles from './menuweeklist.css';
import { EColor, Text } from '../../Text';

export function MenuWeekList() {
  return (
    <ul className={styles.menuWeekList}>
      <li className={styles.menuWeekItem}>
        <button>
          <Text size={16}>Прошедшая неделя</Text>
        </button>
      </li>
      <li className={styles.menuWeekItem}>
        <button>
          <Text size={16}>2 недели назад</Text>
        </button>
      </li>
  </ul>
  );
}
