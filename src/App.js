import React from 'react';
import CreateUrl from './components/CreateUrl/CreateUrl.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>wzrd url shortening service</h1>
        <CreateUrl />
      </header>
    </div>
  );
}

export default App;
