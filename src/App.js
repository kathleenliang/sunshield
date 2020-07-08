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
    };
  }

  componentDidMount() {
    this.weatherInit();
  }

  weatherInit = () => {
    const success = (position) => {
      this.setState({ status: "fetching" });
      localStorage.setItem("location-allowed", true);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const error = () => {
      this.setState({ status: "unable" });
      localStorage.removeItem("location-allowed");
      alert("Unable to retrieve location.");
    };

    if (navigator.geolocation) {
      this.setState({ status: "fetching" });
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      this.setState({ status: "unsupported" });
      alert(
        "Your browser does not support location tracking, or permission is denied."
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sun Shield</h1>
        </header>
        <main>
          <UV latitude={this.state.latitude} longitude={this.state.longitude} />
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
