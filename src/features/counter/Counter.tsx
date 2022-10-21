import React, { ChangeEvent, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
  selectIncrementAmount,
  setIncrementAmount
} from './counterSlice';
import styles from './Counter.module.css';

/**
 * Counter component
 * @constructor
 */
export function Counter() {
  const count = useAppSelector(selectCount);
  const incrementAmount = useAppSelector(selectIncrementAmount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const date = new Date();
    console.log(`Counter mounted at ${date.toLocaleString()}`);
  }, []);

  useEffect(() => {
    if (
      (count === 20)
      || (count === 21 && [2, 3].includes(incrementAmount))
      || (count === 22 && incrementAmount === 3)
    ) {
      setTimeout(() => alert('Counter reaches 20!'), 10);
    }
  }, [count])

  const handleDecrement = () => dispatch(decrement());
  const handleIncrement = () => dispatch(increment());
  const handleSetIncrementAmount = (e: ChangeEvent<HTMLSelectElement>) => dispatch(setIncrementAmount(+e.target.value));

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <select
          className={styles.selectBox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={handleSetIncrementAmount}
        >
          {[1, 2, 3].map((element) => (
            <option key={element} value={element}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
