import "./WeatherCards.css";
import { Sun } from "lucide-react";

type WeatherCardsProps = {
  day: string;
  temperature: number;
  isSelected?: boolean;
};

export default function WeatherCards({
  day,
  temperature,
  isSelected,
}: WeatherCardsProps) {
  return (
    <div className={`weathercards ${isSelected ? "selected" : ""}`}>
      <Sun size={48} color={isSelected ? "black" : "white"} />
      <p style={{ color: "white", fontSize: "23px" }}>{day}</p>
      <h1 style={{ color: "white" }}>{temperature} °C</h1>
    </div>
  );
}
