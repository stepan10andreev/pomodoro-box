import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './taskform.css';
import { EColor, Text } from '../Text';
import { useDispatch } from 'react-redux';
import { taskAdded } from '../../store/postTask/postTask';
import classNames from 'classnames';
import { useAppSelector } from '../Hooks/useAppDispatch';

export function TaskForm() {
  // устанавливаем с помощью хука знаечние ввода инпута (потому что клик на кнопку нельзя передать event.target.value (у кнопки его нет)
  const [taskTitle, setTaskTitle] = useState('');
  const theme = useAppSelector(state => state.theme);

  const dispatch = useDispatch();

  const changeTasTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (taskTitle) {
      dispatch(taskAdded(taskTitle));
      setTaskTitle('');
    }
  }

  const inputClasses = classNames(
      styles.input,
      {[styles.dark]: theme === 'dark'},
  )

  const buttonClasses = classNames(
    styles.button,
    {[styles.dark]: theme === 'dark'},
  )

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={inputClasses} type="text" placeholder='Название задачи' onChange={changeTasTitle} value={taskTitle}/>
      <button type='submit' className={buttonClasses}><Text size={16} weight={500} color={EColor.white}>Добавить</Text></button>
    </form>
  );
}
