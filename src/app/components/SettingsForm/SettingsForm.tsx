import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import styles from './settingsform.css';
import { Text } from '../../components/Text';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { ISettings, setSettings } from '../../store/settings/settings';
import { motion } from 'framer-motion';

export function SettingsForm() {
  const settings = useAppSelector((state) => state.settings);
  const [isSettingsSaved, setIsSettingsSaved] = useState(true);
  const [settingsValues, setSettingsValues] = useState<ISettings>(settings);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSettingsSaved(true);
    dispatch(setSettings(settingsValues));
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input =  event.target as HTMLInputElement;
    if (input.type === 'checkbox') {
      setIsChecked(!isChecked);
      setSettingsValues(prevState => ({...prevState, [input.name]: input.checked}));
    } else {
      setSettingsValues(prevState => ({...prevState, [input.name]: +input.value}));
    }
  }

  const changeSettings = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsSettingsSaved(false);
  }

  return (
    <motion.form
      initial={{opacity: 0, y: 400}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6}}
      className={styles.form}
      onSubmit={handleSubmit} >
      <label className={styles.label}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Продолжительность 1 &quot;Помидора&ldquo; (введите количество минут)</Text>
        <input
          name='tomatoDuration'
          type="number"
          min={1}
          className={styles.input}
          disabled={isSettingsSaved}
          onChange={handleChange}
          value={settingsValues.tomatoDuration}
        />
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Продолжительность короткого перерыва (введите количество минут)</Text>
        <input
          name='shortBreakDuration'
          type="number"
          min={1}
          className={styles.input}
          disabled={isSettingsSaved}
          onChange={handleChange} value={settingsValues.shortBreakDuration}
        />
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Продолжительность длинного перерыва (введите количество минут)</Text>
        <input
          name='longBreakDuration'
          type="number"
          min={1}
          className={styles.input}
          disabled={isSettingsSaved}
          onChange={handleChange}
          value={settingsValues.longBreakDuration}
        />
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>
          Частота длинного перерыва: каждые
          <input
            name='longBreakFrequency'
            type="number"
            min={1}
            className={styles.input}
            disabled={isSettingsSaved}
            onChange={handleChange}
            value={settingsValues.longBreakFrequency}
          />
          помидора
        </Text>
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Уведомления</Text>
        <input
          name='notifications'
          type="checkbox" className={styles.checkbox}
          checked={settingsValues.notifications}
          disabled={isSettingsSaved}
          onChange={handleChange}
        />
      </label>

      <div className={styles.wrapper}>
      <button type='submit' className={styles.btnSaveSettings} disabled={isSettingsSaved}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Сохранить настройки</Text>
      </button>

      <button type='reset' className={styles.btnChangeSettings} onClick={changeSettings} disabled={!isSettingsSaved}>
        <Text As={'span'} size={24} mobileSize={16} weight={700}>Изменить настройки</Text>
      </button>
      </div>
    </motion.form>
  );
}
