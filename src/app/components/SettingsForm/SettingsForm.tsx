import React, { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from 'react';
import styles from './settingsform.css';
import { EColor, Text } from '../../components/Text';

interface ISettingsData {
  [K: string]: string | File | boolean;
}

interface ISettingsValues {
  [K: string]: string | boolean;
  tomatoDuration: string;
  shortBreakDuration: string;
  longBreakDuration: string;
  longBreakFrequency: string;
  notifications: boolean;
}

const initialInputValues: ISettingsValues = {
  tomatoDuration: '',
  shortBreakDuration: '',
  longBreakDuration: '',
  longBreakFrequency: '',
  notifications: false,
}


export function SettingsForm() {
  const [isSettingsSaved, setIsSettingsSaved] = useState(true);
  // const [dataSettings, setDataSettings] = useState<ISettings>({});
  const [settingsValues, setSettingsValues] = useState<ISettingsValues>(initialInputValues);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSettingsSaved(true);
    // const form = event.target as HTMLFormElement;
    // console.log(form.children.namedItem('settigs-input'))
    // const formData = new FormData(form);
    // const formDataObj: ISettingsData = {};
    // formData.forEach((value, key) => {
    //   console.log(value)
    //   formDataObj[key] = value
    // });
    // console.log(formDataObj)
  }

  // function validateValue() {
  //     if (value.length <= 3) return 'Введите больше 3-х символов';
  //     return '';
  //   }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input =  event.target as HTMLInputElement;
    if (input.type === 'checkbox') {
      setIsChecked(!isChecked)
      setSettingsValues(prevState => ({...prevState, [input.name]: input.checked}));
    } else {
      setSettingsValues(prevState => ({...prevState, [input.name]: input.value}))
    }
  }

  const changeSettings = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsSettingsSaved(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <label className={styles.label}>
        <Text As={'span'} size={24} weight={700}>Продолжительность 1 "Помидора" (введите количество минут)</Text>
        <input name='tomatoDuration' type="number"  min={1} className={styles.input} disabled={isSettingsSaved} onChange={handleChange} value={settingsValues.tomatoDuration}/>
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} weight={700}>Продолжительность короткого перерыва (введите количество минут)</Text>
        <input name='shortBreakDuration' type="number" min={1} className={styles.input} disabled={isSettingsSaved} onChange={handleChange} value={settingsValues.shortBreakDuration}/>
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} weight={700}>Продолжительность длинного перерыва (введите количество минут)</Text>
        <input name='longBreakDuration' type="number" min={1} className={styles.input} disabled={isSettingsSaved} onChange={handleChange} value={settingsValues.longBreakDuration}/>
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} weight={700}>Частота длинного перерыва: каждые<input name='longBreakFrequency' type="number" min={1} className={styles.input} disabled={isSettingsSaved} onChange={handleChange} value={settingsValues.longBreakFrequency}/> помидора</Text>
      </label>
      <label className={styles.label}>
        <Text As={'span'} size={24} weight={700}>Уведомления</Text>
        <input name='notifications' type="checkbox" className={styles.checkbox} checked={settingsValues.notifications} disabled={isSettingsSaved} onChange={handleChange}/>
      </label>

      <div className={styles.wrapper}>
      <button type='submit' className={styles.btnSaveSettings} disabled={isSettingsSaved}>
        <Text As={'span'} size={24} weight={700}>Сохранить настройки</Text>
      </button>

      <button type='reset' className={styles.btnChangeSettings} onClick={changeSettings} disabled={!isSettingsSaved}>
        <Text As={'span'} size={24} weight={700}>Изменить настройки</Text>
      </button>
      </div>
    </form>
  );
}
