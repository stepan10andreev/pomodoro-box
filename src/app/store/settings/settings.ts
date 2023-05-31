import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISettings {
  [K: string]: number | boolean;
  tomatoDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakFrequency: number;
  notifications: boolean;
}

const initialState: ISettings = {
  tomatoDuration: 1,
  shortBreakDuration: 3,
  longBreakDuration: 10,
  longBreakFrequency: 4,
  notifications: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<ISettings>) => {
        return state = {...action.payload};
    },
  }
})

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
