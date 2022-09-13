import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <iframe src="https://calendar.google.com/calendar/embed?src=franciscotetremblay%40gmail.com&ctz=America%2FToronto"   width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </header>
    </div>
  );
}

export default App;
