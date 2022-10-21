import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/**
 * Counter Slice instance
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementIfLessThanParam: (state, action: PayloadAction<number>) => {
      if (state.value < action.payload) {
        state.value += 1;
      }
    }
  },
});

export const { increment, decrement, incrementIfLessThanParam } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
