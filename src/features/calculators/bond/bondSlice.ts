import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calculateBond from './calculateBond';
import { RootState } from '../store';

interface calculations {
  years?: number;
  monthlyRepayments: number;
  total: number;
  difference?: number;
}
export interface CounterState {
  value: number;
  price: number;
  years: number;
  error?: string | null;
  interestRate: number;
  deposit: number;
  calculations: {
    current: calculations;
    termOne: calculations;
    termTwo: calculations;
    termThree: calculations;
    termFour: calculations;
  };
}

const initialState: CounterState = {
  value: 0,
  price: 0,
  years: 0,
  error: null,
  interestRate: 8.25,
  deposit: 0,
  calculations: {
    current: {
      years: 0,
      monthlyRepayments: 0,
      total: 0,
    },
    termOne: {
      years: 1,
      monthlyRepayments: 0,
      total: 0,
    },
    termTwo: {
      years: 3,
      monthlyRepayments: 0,
      total: 0,
    },
    termThree: {
      years: 5,
      monthlyRepayments: 0,
      total: 0,
    },
    termFour: {
      years: 10,
      monthlyRepayments: 0,
      total: 0,
    },
  },
};
// @ts-ignore:
export const blogSlice = createSlice({
  name: 'bond',
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
        const monthly = calculateBond(
          state.price - state.deposit,
          state.interestRate,
          state.years
        );

        state.error = null; // reset errors just in case

        for (const property in state.calculations) {
          state.calculations[property] = {
            ...state.calculations[property],
            monthlyRepayments: Number(monthly).toFixed(2),
            total: Number(
              monthly * (state.calculations[property].years || state.years) * 12
            ),
            years: state.calculations[property]?.years || state.years,
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
        price: number;
        years: number;
        interestRate: number;
        deposit: number;
      }>
    ) => {
      state.price = action.payload?.price || state.price;
      state.years = action.payload?.years || state.years;
      state.interestRate = action.payload?.interestRate || state.interestRate;
      state.deposit = action.payload?.deposit || state.deposit;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate, updateParameters, decrement, incrementByAmount } =
  blogSlice.actions;

export default blogSlice.reducer;
