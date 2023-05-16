import React, { useEffect, useState } from 'react';
import styles from './timer.css';
import { EColor, Text } from '../../Text';
import { TimerButtonsWrapper } from './TimerButtonsWrapper';
import { EIcons, Icon } from '../../Icon';
import { getPadTime } from '../../../utils/getPadTime';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { decrementTomatoCount, deleteTask } from '../../../store/postTask/postTask';


export function Timer() {
  const tasks = useAppSelector((state) => state.tasks)
  const currentTask = tasks[0];

  const dispatch = useDispatch();

  const [timer, setTimer] = useState(5);
  const [isCountDowning, setIsCountDowning] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  // const [tomatoCount, setTomatoCount] = useState(1);

  // используем утилиту для того чтобы добавить 0 если секунды или минуты меньше 10
  // minutesValue нужна для вычисления seconds, так как minutes уже является строкой и будет ошибка в вычислениежд
  const minutesValue = Math.floor(timer / 60);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutesValue * 60);

  useEffect(() => {
    // if (currentTask) setTomatoCount(currentTask.countTomato)
    const interval = setInterval(() =>{
      isCountDowning &&
        setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000)

    if (currentTask && (currentTask.countTomato === 0)) dispatch(deleteTask(currentTask.taskId));
    // if (timer === 0) {
    //   setIsCountDowning(false);
    //   dispatch(decrementTomatoCount(currentTask?.taskId));
    // }
    if (!currentTask) setTimer(5)
    return (() => {
      clearInterval(interval);
    })
  }, [currentTask, isCountDowning])

  // здесь условие если помидоров больше нуля то делаем перерывб иначе просто обунялем
  useEffect(() => {
    if (timer === 0) {
      setIsCountDowning(false);
      dispatch(decrementTomatoCount(currentTask?.taskId));
    }
  }, [timer])

  const handleStart = () => {
    if (timer === 0) setTimer(5);
    setIsCountDowning(true);
  };

  const handleStop = () => {
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(5);
  };

  const handlePause = () => {
    setIsCountDowning(false);
    setIsPausing(true);
  };

  const handleReady = () => {
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(5);
    // setTomatoCount((tomatoCount) => (tomatoCount >= 1 ? tomatoCount - 1 : 0))
    dispatch(decrementTomatoCount(currentTask.taskId));
  };

  const handleAddTime = () => {
    setTimer((timer) => timer + 60);
  }

  return (
    <div className={styles.timer}>
      <div className={styles.wrapper}>
        <Text As={'div'} size={150} weight={200}>
          {minutes}
        </Text>
        <Text As={'div'} size={150} weight={200}>
          :
        </Text>
        <Text As={'div'} size={150} weight={200}>
          {seconds}
        </Text>
        <button onClick={handleAddTime} className={styles.addTimeBtn}>
          <Icon name={EIcons.addBtn} size={50}/>
        </button>
      </div>
      <div className={styles.title}>
        <Text size={16} color={EColor.grey99}>Задача 1 - </Text>
        <Text size={16}>{currentTask ? currentTask.taskTitle : 'Текущая задача не добавлена'}</Text>
      </div>
      <div className={styles.timerButtonsWrapper}>
        {isCountDowning ? (
          <button onClick={handlePause} className={styles.startButton}>
            <Text size={16} weight={500} color={EColor.white}>Пауза</Text>
          </button>
        ) : (
          <button onClick={handleStart} className={styles.startButton} disabled={currentTask ? false : true}>
            <Text size={16} weight={500} color={EColor.white}>{isPausing && currentTask ? 'Продолжить' : 'Старт'}</Text>
          </button>
        )}
        {isPausing && currentTask ? (
          <button onClick={handleReady} className={styles.stopButton}>
            <Text size={16} weight={500} color={EColor.red}>Сделано</Text>
          </button>
        ) : (
          <button onClick={handleStop} className={styles.stopButton} disabled={currentTask ? false : true}>
            <Text size={16} weight={500} color={EColor.red}>Стоп</Text>
          </button>
        )}
      </div>
      {/* <TimerButtonsWrapper /> */}
    </div>
  );
}
