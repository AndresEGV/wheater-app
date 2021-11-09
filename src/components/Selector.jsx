import { useState } from "react";
import { regiones } from "../cities";

const Selector = () => {
  const [region, setRegion] = useState("Seleccione Region");
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <div>
      {region}
      <br />
      <select onChange={handleRegionChange}>
        <option value="Seleccione Region">-- Seleccione --Region</option>
        {regiones.map((r) => (
          <option value={r.value}>{r.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
