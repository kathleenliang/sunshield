import React from 'react';
import Emoji from './components/Emoji/Emoji';
import UV from './components/UV/UV';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sun Shield</h1>
      </header>
      <main>
        <UV />
      </main>
      <footer>
        Made by a sunscreen junkie <Emoji symbol="🧴" label="sunscreen"/> 
      </footer>
    </div>
  );
}

export default App;
