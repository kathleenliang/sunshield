import React from "react";
import Emoji from "./components/Emoji/Emoji";
import UV from "./components/UV/UV";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sun Shield</h1>
      </header>
      <main>
        <UV />
      </main>
      <footer id="disclaimer">
        <Emoji symbol="🧴" label="sunscreen" /> If you use chemical exfoliation,
        have sensitive skin, or have health concerns, using sunscreen is
        probably better!
      </footer>
    </div>
  );
}

export default App;
