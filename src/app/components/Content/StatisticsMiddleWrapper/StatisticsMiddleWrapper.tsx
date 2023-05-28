import React from 'react';
import styles from './statisticsmiddlewrapper.css';
import { motion } from 'framer-motion';

interface IStatisticsMiddleWrapper {
  children?: React.ReactNode;
}

export function StatisticsMiddleWrapper({ children }: IStatisticsMiddleWrapper) {
  return (
    <motion.div
      className={styles.middle}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.7}}
    >
      {children}
    </motion.div>
  );
}
