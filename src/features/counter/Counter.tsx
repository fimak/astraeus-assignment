import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

/**
 * Counter component
 * @constructor
 */
export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  /**
   * Decrement Handler
   */
  const handleDecrement = () => dispatch(decrement());
  /**
   * Increment Handler
   */
  const handleIncrement = () => dispatch(increment());

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
    </div>
  );
}
