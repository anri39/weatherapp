import "./InfoScreen.css";
import { Sun, MapPin } from "lucide-react";

export default function InfoScreen() {
  return (
    <div className="infoscreen">
      <div className="toppart">
        <h1 style={{ color: "white", fontSize: "40px" }}>Tuesday</h1>
        <p style={{ color: "white", fontSize: "24px" }}>20 Jun 2022</p>
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
          Biarritz, FR
        </p>
      </div>
      <div className="bottompart">
        <Sun size={70} color="white" />
        <h1 style={{ color: "white", fontSize: "45px" }}>29 °C</h1>
        <p style={{ color: "white", fontSize: "24px" }}>Sunny</p>
      </div>
    </div>
  );
}
