import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  value: number;
  incrementAmount: number;
}

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
};

/**
 * Counter Slice instance
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },
    decrement: (state) => {
      state.value -= state.incrementAmount;
    },
    updateWithCondition: (state, action: PayloadAction<number>) => {
      if (state.value >= 0 && state.value < action.payload) {
        state.value += state.incrementAmount;
      } else if (state.value <= 0) {
        state.value -= state.incrementAmount;
      }
    },
    setIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const { increment, decrement, updateWithCondition, setIncrementAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export const selectIncrementAmount = (state: RootState) => state.counter.incrementAmount;

export default counterSlice.reducer;
