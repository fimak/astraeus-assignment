import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { increment } from '../features/counter/counterSlice';

/**
 * Timer middleware which increment state every second
 * @param dispatch
 */
const timer = ({ dispatch }: { dispatch: Dispatch }) => {
  setInterval(() => dispatch(increment()), 1000);

  return (next: Dispatch) => (action: AnyAction) => {
    next(action);
  };
};

export default timer;
