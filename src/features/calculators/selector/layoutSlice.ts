import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LayoutState {
  advanced: boolean;
}

const initialState: LayoutState = {
  advanced: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.advanced = !state.advanced;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleView } = layoutSlice.actions;
export default layoutSlice.reducer;
