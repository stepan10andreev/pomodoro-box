import { Action, PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface IPayloadSettings {
  propsName: string;
  propsValue: number | boolean;
}

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
    // setSettingsByProps: {
    //   reducer (state, action: PayloadAction<IPayloadSettings>) {
    //     // 2 варианта записи
    //     state[action.payload.propsName] = action.payload.propsValue
    //     // return state = {...state, [action.payload.propsName]: action.payload.propsValue};
    //   },
    //   prepare (propsName: string, propsValue: number | boolean) {
    //     return {
    //       payload: {
    //         propsName,
    //         propsValue,
    //       }
    //     }
    //   },
    // },
    setSettings: (state, action: PayloadAction<ISettings>) => {
        return state = {...action.payload}
    },
  }
})


export const { setSettings } = settingsSlice.actions;


export default settingsSlice.reducer;
