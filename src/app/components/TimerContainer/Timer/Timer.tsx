import React, { useEffect, useState } from 'react';
import styles from './timer.css';
import { EColor, Text } from '../../Text';
import { TimerButtonsWrapper } from './TimerButtonsWrapper';
import { EIcons, Icon } from '../../Icon';
import { getPadTime } from '../../../utils/getPadTime';


export function Timer() {
  const [timer, setTimer] = useState<number>(5);
  const [isCountDowning, setIsCountDowning] = useState(false);
  // используем утилиту для того чтобы добавить 0 если секунды или минуты меньше 10
  // minutesValue нужна для вычисления seconds, так как minutes уже является строкой и будет ошибка в вычислениежд
  const minutesValue = Math.floor(timer / 60);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutesValue * 60);

  useEffect(() => {
    const interval = setInterval(() =>{
      isCountDowning &&
        setTimer((timer) => (timer >= 1 ? timer - 1 : 0))
    }, 1000)
    if (timer === 0) setIsCountDowning(false)
    return (() => {
      clearInterval(interval)
    })
  }, [timer, isCountDowning])

  const handleStart = () => {
    if (timer === 0) setTimer(5)
    setIsCountDowning(true)
  };

  const handleStop = () => {
    setIsCountDowning(false)
    setTimer(5)
  };

  const handlePause = () => {
    setIsCountDowning(false)
  };

  // const handleReady = () => {

  // };

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
        <button className={styles.addTimeBtn}>
          <Icon name={EIcons.addBtn} size={50}/>
        </button>
      </div>
      <div className={styles.title}>
        <Text size={16} color={EColor.grey99}>Задача 1 - </Text>
        <Text size={16}>Сверстать сайт</Text>
      </div>
      <div className={styles.timerButtonsWrapper}>
        {isCountDowning ? (
          <button onClick={handlePause} className={styles.startButton}>
            <Text size={16} weight={500} color={EColor.white}>Пауза</Text>
          </button>
        ) : (
          <button onClick={handleStart} className={styles.startButton}>
            <Text size={16} weight={500} color={EColor.white}>Старт</Text>
          </button>
        )}

        <button onClick={handleStop} className={styles.stopButton}><Text size={16} weight={500} color={EColor.grayC4}>Стоп</Text></button>
      </div>
      {/* <TimerButtonsWrapper /> */}
    </div>
  );
}
