import React from 'react';
import styles from './settingspage.css';
import { Content } from '../../components/Content';
import { EColor, Text } from '../../components/Text';

export function SettingsPage() {
  return (
    <Content>
        <form className={styles.form}>
          <label className={styles.label}>
            <Text As={'span'} size={24} weight={700}>Продолжительность 1 "Помидора" (введите количество минут)</Text>
            <input type="number" min={1} className={styles.input}/>
          </label>
          <label className={styles.label}>
            <Text As={'span'} size={24} weight={700}>Продолжительность короткого перерыва (введите количество минут)</Text>
            <input type="number" min={1} className={styles.input}/>
          </label>
          <label className={styles.label}>
            <Text As={'span'} size={24} weight={700}>Продолжительность длинного перерыва (введите количество минут)</Text>
            <input type="number" min={1} className={styles.input}/>
          </label>
          <label className={styles.label}>
            <Text As={'span'} size={24} weight={700}>Частота длинного перерыва: каждые  <input type="number" min={1} className={styles.input}/> помидора</Text>
          </label>
          <label className={styles.label}>
            <Text As={'span'} size={24} weight={700}>Уведомления<input type="number" min={1} className={styles.input}/> помидора</Text>
          </label>

          <div className={styles.wrapper}>
          <button className={styles.btnSaveSettings}>
            <Text As={'span'} size={24} weight={700}>Сохранить настройки</Text>
          </button>

          <button className={styles.btnChangeSettings}>
            <Text As={'span'} size={24} weight={700}>Изменить настройки</Text>
          </button>
          </div>
        </form>
    </Content>
  );
}
