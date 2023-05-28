import React from 'react';
import styles from './statisticsbottomwrapper.css';
import { motion } from 'framer-motion';

interface IStatisticsBottomWrapper {
  children?: React.ReactNode;
}

export function StatisticsBottomWrapper({ children }: IStatisticsBottomWrapper) {
  return (
    <motion.div
      className={styles.bottom}
      initial={{ opacity: 0, y: 300}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7}}
    >
      {children}
    </motion.div>
  );
}
