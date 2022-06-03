import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calculateRent from './calculateRent';
import { RootState } from '../store';

interface calculations {
  months?: number;
  monthlyGains: number;
  total: number;
  difference?: number;
}
export interface Structure {
  value: number;
  rent: number;
  months: number;
  error?: string | null;
  utilized: number;
  deposit: number;
  calculations: {
    current: calculations;
    termOne: calculations;
    termTwo: calculations;
    termThree: calculations;
    termFour: calculations;
  };
}

const initialState: Structure = {
  value: 0,
  rent: 0,
  months: 0,
  error: null,
  utilized: 8.25,
  deposit: 0,
  calculations: {
    current: {
      months: 0,
      monthlyGains: 0,
      total: 0,
    },
    termOne: {
      months: 1,
      monthlyGains: 0,
      total: 0,
    },
    termTwo: {
      months: 3,
      monthlyGains: 0,
      total: 0,
    },
    termThree: {
      months: 5,
      monthlyGains: 0,
      total: 0,
    },
    termFour: {
      months: 10,
      monthlyGains: 0,
      total: 0,
    },
  },
};
// @ts-ignore:
export const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    calculate: (state: RootState) => {
      try {
        const monthly = calculateRent(
          state.rent - state.deposit,
          state.utilized,
          state.months
        );

        state.error = null; // reset errors just in case

        for (const property in state.calculations) {
          state.calculations[property] = {
            ...state.calculations[property],
            monthlyGains: Number(monthly).toFixed(2),
            total: Number(
              monthly *
                (state.calculations[property].months || state.months) *
                12
            ),
            months: state.calculations[property]?.months || state.months,
          };
        }
      } catch (error) {
        // Error handling
        state.error =
          "Some of your values you've entered are invalid, please try again.";
      }
    },
    updateParameters: (
      state,
      action: PayloadAction<{
        rent: number;
        months: number;
        utilized: number;
        deposit: number;
      }>
    ) => {
      state.rent = action.payload?.rent || state.rent;
      state.months = action.payload?.months || state.months;
      state.utilized = action.payload?.utilized || state.utilized;
      state.deposit = action.payload?.deposit || state.deposit;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate, updateParameters, decrement, incrementByAmount } =
  rentSlice.actions;

export default rentSlice.reducer;
