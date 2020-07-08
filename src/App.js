import React from "react";
import Emoji from "./components/Emoji/Emoji";
import UV from "./components/UV/UV";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: -1,
      longitude: -1,
      geolocation: false,
    };
  }

  componentDidMount() {
    this.setGeolocation();
  }

  setGeolocation = () => {
    const success = (position) => {
      this.setState({ status: "fetching" });
      localStorage.setItem("location-allowed", true);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        geolocation: true,
      });
    };

    const error = () => {
      this.setState({
        geolocation: false,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sun Shield</h1>
        </header>
        <main>
          <UV
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            geolocation={this.state.geolocation}
          />
        </main>
        <footer id="disclaimer">
          * Disclaimer: If you chemically exfoliate, have sensitive skin, or
          have health concerns, sunscreen is recommended!{" "}
          <Emoji symbol="🧴" label="sunscreen" />
        </footer>
      </div>
    );
  }
}

export default App;
