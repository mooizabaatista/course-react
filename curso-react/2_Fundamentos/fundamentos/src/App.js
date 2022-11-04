// components
import FirstComponent from "./components/FirstComponent";
import Events from "./components/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Challenge from "./components/Challenge";

// styles / CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <hr />
      <FirstComponent />
      <hr />
      <Events />
      <hr />
      <Challenge />
    </div>
  );
}

export default App;
