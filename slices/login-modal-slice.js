import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'loginModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = counterSlice.actions;

export default counterSlice.reducer;