import React, { useEffect } from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';
import { useAppSelector } from '../../Hooks/useAppDispatch';

export function TimerTask() {
  const tasks = useAppSelector((state) => state.tasks)
  const currentTask = tasks[0]

  // useEffect(() => {
  //   console.log(currentTask)
  // }, [currentTask])

  return (
    <div className={styles.timerTask}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>{currentTask ? currentTask.taskTitle : 'Название текущей задачи'}</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор 1</Text>
    </div>
  );
}
// {currentTask ? `Помидор ${currentTask.countTomato}` : 'Количество помидоров'}
