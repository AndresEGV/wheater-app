import { useState } from "react";
import { regiones } from "../cities";
import ClimaSection from "./ClimaSection";
const Selector = () => {
  const [region, setRegion] = useState("Seleccione Region");

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pronostico por region</h1>
      <br />
      <select onChange={handleRegionChange}>
        <option value="Seleccione Region">-- Seleccione --Region</option>
        {regiones.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ClimaSection region={region} />
    </div>
  );
};

export default Selector;
