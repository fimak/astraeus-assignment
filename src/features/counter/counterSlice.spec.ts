import counterReducer, {
  CounterState,
  increment,
  decrement,
  setIncrementAmount, updateWithCondition,
} from './counterSlice';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    incrementAmount: 1,
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      incrementAmount: 1,
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle updateWithCondition | don\'t increment state', () => {
    const actual = counterReducer(initialState, updateWithCondition(3));
    expect(actual.value).toEqual(3);
  });

  it('should handle updateWithCondition | decrement if sate is below zero', () => {
    const initialState: CounterState = {
      value: -1,
      incrementAmount: 1,
    };
    const actual = counterReducer(initialState, updateWithCondition(3));
    expect(actual.value).toEqual(-2);
  });

  it('should handle setIncrementAmount', () => {
    const actual = counterReducer(initialState, setIncrementAmount(2))
    expect(actual.incrementAmount).toEqual(2);
  });

  // todo: test middleware
});
