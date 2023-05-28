import React from 'react';
import styles from './statisticstopwrapper.css';
import { motion } from 'framer-motion';

interface IStatisticsTopWrapper {
  children?: React.ReactNode;
}

export function StatisticsTopWrapper({ children }: IStatisticsTopWrapper) {
  return (
    <motion.div
      className={styles.top}
      initial={{ opacity: 0, y: -300}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7}}
    >
      {children}
    </motion.div>
  );
}
