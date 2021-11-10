import { useState } from "react";
import { regiones } from "../cities";
import ClimaSection from "./ClimaSection";

const Selector = () => {
  const [region, setRegion] = useState("Seleccione Region");
  const [img, setImg] = useState(null);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);

    let imagenes = [];

    imagenes = regiones
      .filter(({ value }) => value === e.target.value)
      .map((i) => i.img);

    setImg(imagenes);
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
      <h1>Pronóstico por región</h1>
      <br />
      <select onChange={handleRegionChange} className="mb-3">
        <option value="Seleccione Region">-- Seleccione Región ---</option>
        {regiones.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>

      <ClimaSection region={region} image={img} />
    </div>
  );
};

export default Selector;
