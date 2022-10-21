import { Middleware } from '@reduxjs/toolkit';
import { updateWithCondition } from '../features/counter/counterSlice';

/**
 * Timer middleware which increment state every second
 * @param dispatch
 */
const timer: Middleware = ({ dispatch }) => {
  setInterval(() => dispatch(updateWithCondition(10)), 1000);

  return (next) => (action) => {
    next(action);
  };
};

export default timer;
