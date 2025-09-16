import "./App.css";
import InfoScreen from "./components/InfoScreen";
import RightScreen from "./components/RightScreen";

function App() {
  return (
    <div className="weatherappcontainer">
      <InfoScreen />
      <RightScreen />
    </div>
  );
}

export default App;
