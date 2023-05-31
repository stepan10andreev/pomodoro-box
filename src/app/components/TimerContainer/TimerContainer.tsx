import React from 'react';
import styles from './timerContainer.css';
import { TimerTask } from './TimerTask';
import { Timer } from './Timer/Timer';
import { motion } from 'framer-motion';

export function TimerContainer() {
  return (
    <motion.div
      className={styles.timerContainer}
      initial={{ opacity: 0, y: 400}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6}}
    >
      <TimerTask />
      <Timer />
    </motion.div>
  );
}
