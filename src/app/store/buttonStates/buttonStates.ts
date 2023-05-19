import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IButtonStates {
  isStopButtonClicked: boolean;
  isStopButtonHovered: boolean;
  isReadyButtonClicked: boolean;
  isReadyButtonHovered: boolean;
  isChangedTomatoCountByMenu: boolean;
  isChangedTomatoCountByTimer: boolean;
}

const initialState: IButtonStates = {
  isStopButtonClicked: false,
  isStopButtonHovered: false,
  isReadyButtonClicked: false,
  isReadyButtonHovered: false,
  isChangedTomatoCountByMenu: false,
  isChangedTomatoCountByTimer: false,
}

const buttonStatesSlice = createSlice({
  name: 'buttonStates',
  initialState,
  reducers: {
    changeStopBtnHoverState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    },
    changeReadyBtnHoverState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    },
    changeChangedByMenuState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isChangedTomatoCountByMenu = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    },
    changeChangedByTimerState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isChangedTomatoCountByTimer = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    }
  }
})

export const { changeStopBtnHoverState, changeReadyBtnHoverState, changeChangedByMenuState, changeChangedByTimerState } = buttonStatesSlice.actions;

export default buttonStatesSlice.reducer;
