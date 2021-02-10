import logo from "./logo.png";
import "./App.css";
import MapContainer from "./MapContainer";
import Side from "./Side";

function App() {
  return (
    <div className="App">
      <script
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAl7rJskwTxg3fIJ3wKhN_KT0emk1LlcI0
    &libraries=places&callback=initMap"
      ></script>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="MainLogoText">
          <u>Street Eat</u>
        </h1>
        <p className="TagLine">Word on the Street for where to Eat</p>
      </header>
      <div className="container">
        <MapContainer />
        <Side />
      </div>
    </div>
  );
}

export default App;
