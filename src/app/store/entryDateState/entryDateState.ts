import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IEntryDate {
  day: string;
  // numberDay: number;
  // numberMonth: number;
  msDate: number;
  numberDay: number;
}

const initialState: IEntryDate = {
  msDate: 0,
  numberDay: 0,
  day: '',
  // numberDay: 0,
  // numberMonth: 0,
}



const entryDateSlice = createSlice({
  name: 'entryDate',
  initialState,
  reducers: {
    setTodayDate: {
      reducer (state, action: PayloadAction<IEntryDate>) {
        state.msDate =  action.payload.msDate;
        state.day = action.payload.day;
        state.numberDay = action.payload.numberDay;
      },
      prepare (day: string, numberDay: number, msDate: number ) {
        return {
          payload: {
            day,
            numberDay,
            msDate,
          }
        }
      }
    },
  }
})

export const { setTodayDate } = entryDateSlice.actions;

export default entryDateSlice.reducer;
