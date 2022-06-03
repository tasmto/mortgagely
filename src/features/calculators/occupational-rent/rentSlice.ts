import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calculateRent from './calculateRent';

interface calculations {
  months?: number;
  totalGained: number;
  total: number;
}
export interface Structure {
  rent: number;
  months: number;
  utilized: number;
  error?: string | null;
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
  rent: 0,
  months: 0,
  error: null,
  utilized: 8.25,
  deposit: 0,
  calculations: {
    current: {
      totalGained: 0,
      total: 0,
    },
    termOne: {
      months: 1,
      totalGained: 0,
      total: 0,
    },
    termTwo: {
      months: 3,
      totalGained: 0,
      total: 0,
    },
    termThree: {
      months: 5,
      totalGained: 0,
      total: 0,
    },
    termFour: {
      months: 10,
      totalGained: 0,
      total: 0,
    },
  },
};

export const rentSlice: any = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    calculate: (state: any) => {
      try {
        const monthly = calculateRent(
          state.rent - state.deposit,
          state.utilized,
          state.months
        );

        state.error = null; // reset errors just in case

        for (const property in state.calculations) {
          const { totalGained, totalPaid } = calculateRent(
            state.rent,
            state.utilized,
            state.calculations[property].months || state.months
          );
          state.calculations[property] = {
            ...state.calculations[property],
            totalGained,
            total: totalPaid,
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
      }>
    ) => {
      state.rent = action.payload?.rent || state.rent;
      state.months = action.payload?.months || state.months;
      state.utilized = action.payload?.utilized || state.utilized;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate, updateParameters } = rentSlice.actions;

export default rentSlice.reducer;
