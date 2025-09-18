import React, { useEffect, useState } from "react";
import "./App.css";
import InfoScreen from "./components/InfoScreen";
import RightScreen from "./components/RightScreen";

interface ForecastDay {
  date: string;
  day: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
}

interface WeatherData {
  location: string;
  current: {
    date: string;
    day: string;
    weathercode: number;
    temperature: string;
  };
  forecast: ForecastDay[];
}

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [coords, setCoords] = useState({ lat: 52.52, lon: 13.41 });
  const [city, setCity] = useState("Berlin");
  const [search, isSearchActive] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}` +
        "&current_weather=true" +
        "&daily=temperature_2m_max,precipitation_sum,relative_humidity_2m_max,wind_speed_10m_max" +
        "&forecast_days=4" +
        "&timezone=auto"
    )
      .then((res) => res.json())
      .then((json) => {
        const current = json.current_weather;
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: "long" };
        const day = now.toLocaleDateString(undefined, options);
        const date = now.toLocaleDateString();

        const forecast: ForecastDay[] = json.daily.time.map(
          (time: string, i: number) => {
            const d = new Date(time);
            return {
              date: time,
              day: d.toLocaleDateString(undefined, { weekday: "short" }),
              temperature: json.daily.temperature_2m_max[i],
              precipitation: json.daily.precipitation_sum[i],
              humidity: json.daily.relative_humidity_2m_max[i],
              wind: json.daily.wind_speed_10m_max[i],
            };
          }
        );

        setData({
          location: city,
          current: {
            date,
            day,
            weathercode: current.weathercode,
            temperature: String(current.temperature),
          },
          forecast,
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [coords, city]);

  const handleLocationChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoLocation = await res.json();
    if (geoLocation?.results?.length > 0) {
      const firstResult = geoLocation.results[0];
      setCoords({ lat: firstResult.latitude, lon: firstResult.longitude });
      setCity(firstResult.name);
      isSearchActive(false);
    } else {
      alert("Location not found");
    }
  };

  return (
    <div className="weatherappcontainer">
      {search && (
        <div className="overlay" onClick={() => isSearchActive(false)} />
      )}

      {data ? (
        <>
          <div className={`main ${search ? "blurred" : ""}`}>
            <InfoScreen
              location={data.location}
              date={data.current.date}
              day={data.current.day}
              weathercode={data.current.weathercode}
              weathertemperature={data.current.temperature}
            />
            <RightScreen
              forecast={data.forecast}
              searchEnabled={() => isSearchActive(!search)}
            />
          </div>

          {search && (
            <form onSubmit={handleLocationChange}>
              <input
                type="text"
                placeholder="Enter City"
                className="locinput"
                value={city}
                autoFocus
                onChange={(e) => setCity(e.target.value)}
              />
            </form>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
