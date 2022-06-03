import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calculateSavings from './calculateSavings';

interface calculations {
  months?: number;
  total: number;
  monthlyGains: number;
  timeTillGoal: number;
}
export interface Structure {
  goal: number;
  months: number;
  error?: string | null;
  interestRate: number;
  deposit: number;
  calculations: {
    current: calculations;
    termOne: calculations;
    termTwo: calculations;
    termThree: calculations;
    termFour: calculations;
    termFive: calculations;
    termSix: calculations;
  };
}

const initialState: Structure = {
  goal: 0,
  months: 0,
  error: null,
  interestRate: 8.25,
  deposit: 0,
  calculations: {
    current: {
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termOne: {
      months: 6,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termTwo: {
      months: 12,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termThree: {
      months: 18,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termFour: {
      months: 24,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termFive: {
      months: 36,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
    termSix: {
      months: 48,
      total: 0,
      monthlyGains: 0,
      timeTillGoal: 0,
    },
  },
};
// @ts-ignore:
export const savingsSlice: any = createSlice({
  name: 'savings',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    calculate: (state: any) => {
      try {
        state.error = ''; // reset errors just in case
        const { total, monthlyGains, timeTillGoal } = calculateSavings(
          state.goal,
          state.interestRate,
          state.months,
          state.deposit
        );

        for (const property in state.calculations) {
          const { total, monthlyGains, timeTillGoal } = calculateSavings(
            state.goal,
            state.interestRate,
            state.calculations[property].months || state.months,
            state.deposit
          );
          state.calculations[property] = {
            ...state.calculations[property],
            total,
            monthlyGains,
            timeTillGoal,
          };
        }
      } catch (error: any) {
        // Error handling
        state.error = error?.message || 'Please try again';
      }
    },
    updateParameters: (
      state,
      action: PayloadAction<{
        goal: number;
        months: number;
        interestRate: number;
        deposit: number;
      }>
    ) => {
      state.goal = action.payload?.goal || state.goal;
      state.months = action.payload?.months || state.months;
      state.interestRate = action.payload?.interestRate || state.interestRate;
      state.deposit = action.payload?.deposit || state.deposit;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate, updateParameters } = savingsSlice.actions;

export default savingsSlice.reducer;
