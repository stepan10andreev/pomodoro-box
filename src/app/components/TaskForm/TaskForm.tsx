import React, { FormEvent } from 'react';
import styles from './taskform.css';
import { EColor, Text } from '../Text';
import { Content } from '../Content';

export function TaskForm() {
  // const handleClick = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log('asdasd')
  // }
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder='Название задачи'/>
      <button className={styles.button}><Text size={16} color={EColor.white}>Добавить</Text></button>
    </form>
  );
}
