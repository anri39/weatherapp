import "./RightScreen.css";
import { MapPin } from "lucide-react";
import WeatherCards from "./WeatherCards";
export default function RightScreen() {
  return (
    <div className="right-screen">
      <div className="stats">
        <div className="precipitation statsrow">
          <h1>PRECIPITATION</h1>
          <h1>0%</h1>
        </div>
        <div className="humidity statsrow">
          <h1>HUMIDITY</h1>
          <h1>42%</h1>
        </div>
        <div className="wind statsrow">
          <h1>WIND</h1>
          <h1 className="kmh">3KM/H</h1>
        </div>
      </div>

      <div className="weathercard" style={{ backgroundColor: "#2b313bff" }}>
        <WeatherCards temperature={20} day="tue" isSelected />
        <WeatherCards temperature={20} day="tue" />
        <WeatherCards temperature={20} day="tue" />
        <WeatherCards temperature={20} day="tue" />
      </div>
      <button className="changebutton">
        <MapPin size={20} color="white" /> Change Location{" "}
      </button>
    </div>
  );
}
