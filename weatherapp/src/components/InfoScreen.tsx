import "./InfoScreen.css";
import { Sun, Cloudy, CloudRain, MapPin } from "lucide-react";

export default function InfoScreen({
  location,
  date,
  weathercode,
  weathertemperature,
  day,
}: {
  location: string;
  date: string;
  weathertemperature: string;
  day: string;
  weathercode: number;
}) {
  const weatherIcon =
    weathercode === 0 ? (
      <Sun size={70} color="white" />
    ) : weathercode === 2 || weathercode === 3 ? (
      <Cloudy size={70} color="white" />
    ) : weathercode === 51 || weathercode === 61 ? (
      <CloudRain size={70} color="white" />
    ) : (
      <Sun size={70} color="white" />
    );

  const weatherText =
    weathercode === 0
      ? "Clear"
      : weathercode === 2 || weathercode === 3
      ? "Cloudy"
      : weathercode === 51 || weathercode === 61
      ? "Rainy"
      : "Unknown";

  return (
    <div className="infoscreen">
      <div className="toppart">
        <h1 style={{ color: "white", fontSize: "40px" }}>{day}</h1>
        <p style={{ color: "white", fontSize: "24px" }}>{date}</p>
        <p
          style={{
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <MapPin size={26} />
          {location}
        </p>
      </div>
      <div className="bottompart">
        {weatherIcon}
        <h1 style={{ color: "white", fontSize: "45px" }}>
          {weathertemperature} °C
        </h1>
        <p style={{ color: "white", fontSize: "24px" }}>{weatherText}</p>
      </div>
    </div>
  );
}
