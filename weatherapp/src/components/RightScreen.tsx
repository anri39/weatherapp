import "./RightScreen.css";
import { MapPin } from "lucide-react";
import WeatherCards from "./WeatherCards";

interface ForecastDay {
  date: string;
  day: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
}

interface RightScreenProps {
  forecast: ForecastDay[];
  searchEnabled: () => void;
}

export default function RightScreen({
  forecast,
  searchEnabled,
}: RightScreenProps) {
  const today = forecast[0];

  return (
    <div className="right-screen">
      <div className="stats">
        <div className="precipitation statsrow">
          <h1>PRECIPITATION</h1>
          <h1>{today.precipitation}%</h1>
        </div>
        <div className="humidity statsrow">
          <h1>HUMIDITY</h1>
          <h1>{today.humidity}%</h1>
        </div>
        <div className="wind statsrow">
          <h1>WIND</h1>
          <h1 className="kmh">{today.wind} KM/H</h1>
        </div>
      </div>

      <div className="weathercard" style={{ backgroundColor: "#2b313bff" }}>
        {forecast.map((day, index) => (
          <WeatherCards
            key={day.date}
            temperature={Math.round(day.temperature)}
            day={day.day}
            isSelected={index === 0}
          />
        ))}
      </div>

      <button className="changebutton " onClick={searchEnabled}>
        <MapPin size={20} color="white" /> Change Location
      </button>
    </div>
  );
}
