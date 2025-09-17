import "./RightScreen.css";
import { MapPin } from "lucide-react";
import WeatherCards from "./WeatherCards";
export default function RightScreen({
  precipitation,
  humidity,
  wind,
}: {
  precipitation?: number;
  humidity?: number;
  wind?: number;
}) {
  return (
    <div className="right-screen">
      <div className="stats">
        <div className="precipitation statsrow">
          <h1>PRECIPITATION</h1>
          <h1>{precipitation}%</h1>
        </div>
        <div className="humidity statsrow">
          <h1>HUMIDITY</h1>
          <h1>{humidity}%</h1>
        </div>
        <div className="wind statsrow">
          <h1>WIND</h1>
          <h1 className="kmh">{wind}KM/H</h1>
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
