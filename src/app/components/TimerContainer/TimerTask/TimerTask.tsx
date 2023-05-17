import React, { useEffect, useState } from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { Itask } from '../../../store/postTask/postTask';


export function TimerTask() {
  // const tasks = useAppSelector((state) => state.tasks[0]);
  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];

  const stopBtnState = useAppSelector((state) => state.buttonstates.isStopButtonHovered);
  const readyBtnState = useAppSelector((state) => state.buttonstates.isReadyButtonHovered);


  const [initialTomatoNumber, setInitialTomatoNumber] = useState(0);

  useEffect(() => {
    if (currentTask?.countTomato > initialTomatoNumber) setInitialTomatoNumber(currentTask.countTomato)
    if (currentTask?.countTomato < initialTomatoNumber) setInitialTomatoNumber(currentTask.countTomato)
  }, [tasks])

  useEffect(() => {
    setInitialTomatoNumber(currentTask?.countTomato)
  }, [currentTask?.taskId])

  return (
    <div className={styles.timerTask + ' ' + (stopBtnState || readyBtnState ? styles.bgRed : '')}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>{currentTask ? currentTask.taskTitle : 'Название текущей задачи'}</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор {(currentTask) ? (initialTomatoNumber - (currentTask.countTomato - 1)) : 1}</Text>
    </div>
  );
}
