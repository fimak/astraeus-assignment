import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

/**
 * Main component - App
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
