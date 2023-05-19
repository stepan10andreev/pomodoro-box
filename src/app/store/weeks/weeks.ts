import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IWeeks {
  [K: string]: boolean
}

const initialState: IWeeks = {
  currentWeek: true,
  lastWeek: false,
  twoWeeksAgo: false,
}

// function setAllWeeksFalseExcludeSelected (weeksObj: IWeeks, weekValue: string) {
//     for (let key in weeksObj) {
//       if (key != weekValue) {
//         weeksObj[key] = false;
//       }
//     }
// }

function setAllWeeksFalseExcludeSelected (weeksState: IWeeks, weekValue: string) {
  weeksState[weekValue] = true;
  for (let key in weeksState) {
    if (key != weekValue) {
      weeksState[key] = false;
    }
  }
}

const weeksSlice = createSlice({
  name: 'weeks',
  initialState,
  reducers: {
    chooseWeek: {
      reducer (state, action: PayloadAction<string>) {
        setAllWeeksFalseExcludeSelected(state, action.payload)
      },
      prepare (weekValue: string) {
        return {
          payload: weekValue,
        }
      }
    },
    // chooseLastWeek: {
    //   reducer (state, action: PayloadAction<boolean>) {
    //     state.lastWeek = action.payload;
    //     setAllWeeksFalseExcludeSelected(state, 'lastWeek')
    //   },
    //   prepare (weekState: boolean) {
    //     return {
    //       payload: weekState,
    //     }
    //   }
    // },
    // chooseTwoWeeksAgo: {
    //   reducer (state, action: PayloadAction<boolean>) {
    //     state.twoWeeksAgo = action.payload;
    //     setAllWeeksFalseExcludeSelected(state, 'twoWeeksAgo')
    //   },
    //   prepare (weekState: boolean) {
    //     return {
    //       payload: weekState,
    //     }
    //   }
    // },
    // chooseCurrentWeek: {
    //   reducer (state, action: PayloadAction<boolean>) {
    //     state.currentWeek = action.payload;
    //     setAllWeeksFalseExcludeSelected(state, 'currentWeek')
    //   },
    //   prepare (weekState: boolean) {
    //     return {
    //       payload: weekState,
    //     }
    //   }
    // },
  }
})

export const { /*chooseLastWeek, chooseTwoWeeksAgo, chooseCurrentWeek,*/ chooseWeek } = weeksSlice.actions;

export default weeksSlice.reducer;
