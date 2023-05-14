import React, { useEffect, useState } from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';
import { useAppSelector } from '../../Hooks/useAppDispatch';

// const tasks = useAppSelector((state) => state.tasks);
// const currentTask = tasks[0];
// const initialTomatoNumber = currentTask.countTomato

export function TimerTask() {
  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];
  const [initialTomatoNumber, setInitialTomatoNumber] = useState(0);

  useEffect(() => {
    // currentTask.countTomato > initialTomatoNumber - чтобы initialTomatoNumber оставался изначальным либо изменялся если пользователь добавляет помидоров больше чем изначально
    if (currentTask && currentTask.countTomato > initialTomatoNumber) setInitialTomatoNumber(currentTask.countTomato)
    // const initial = initialTomatoNumber
    console.log(initialTomatoNumber)
  }, [currentTask, initialTomatoNumber])

  return (
    <div className={styles.timerTask}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>{currentTask ? currentTask.taskTitle : 'Название текущей задачи'}</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор {(currentTask) ? (initialTomatoNumber - (currentTask.countTomato - 1)) : 1}</Text>
    </div>
  );
}
