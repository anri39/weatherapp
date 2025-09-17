import { useEffect, useState } from "react";
import "./App.css";
import InfoScreen from "./components/InfoScreen";
import RightScreen from "./components/RightScreen";

interface WeatherData {
  location: string;
  date: string;
  day: string;
  weathercode: number;
  weathertemperature: string;
}

function App() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=relative_humidity_2m,precipitation,wind_speed_10m&timezone=auto"
    )
      .then((res) => res.json())
      .then((json) => {
        const current = json.current_weather;

        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: "long" };
        const day = now.toLocaleDateString(undefined, options);
        const date = now.toLocaleDateString();

        setData({
          location: "Berlin, Germany",
          date,
          day,
          weathercode: current.weathercode,
          weathertemperature: String(current.temperature),
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div className="weatherappcontainer">
      {data ? (
        <div className="main">
          <InfoScreen
            location={data.location}
            date={data.date}
            day={data.day}
            weathercode={data.weathercode}
            weathertemperature={data.weathertemperature}
          />
          <RightScreen />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
