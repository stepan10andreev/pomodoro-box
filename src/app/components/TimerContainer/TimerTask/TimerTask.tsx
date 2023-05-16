import React, { useEffect, useState } from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { Itask } from '../../../store/postTask/postTask';


export function TimerTask() {
  // const tasks = useAppSelector((state) => state.tasks[0]);
  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];

  // const [taskObject, setTaskObject] = useState<Itask>({
  //   taskId: '',
  //   taskTitle: '',
  //   countTomato: 0,
  // })
  const [initialTomatoNumber, setInitialTomatoNumber] = useState(0);
  // const [actualTomato, setActualTomato] = useState(0)

  useEffect(() => {
    if (currentTask && currentTask.countTomato > initialTomatoNumber) setInitialTomatoNumber(currentTask.countTomato)
  }, [tasks])

  // useEffect(() => {
  //   if (currentTask && currentTask.countTomato < initialTomatoNumber) setInitialTomatoNumber(currentTask.countTomato)
  // }, [currentTask ? currentTask.countTomato : null])

  useEffect(() => {
    if (currentTask) setInitialTomatoNumber(currentTask.countTomato)
  }, [currentTask ? currentTask.taskId : null])

  return (
    <div className={styles.timerTask}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>{currentTask ? currentTask.taskTitle : 'Название текущей задачи'}</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор {(currentTask) ? (initialTomatoNumber - (currentTask.countTomato - 1)) : 1}</Text>
    </div>
  );
}
