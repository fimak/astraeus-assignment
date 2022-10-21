import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

/**
 * Main component - Application Counter
 * Features of Counter: Increment & Decrement value
 * In the meantime, value increments by middleware every 1 second.
 * @constructor
 */
function App() {
  useEffect(() => {
    const date = new Date();
    console.log(`App mounted at ${date.toLocaleString()}`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
