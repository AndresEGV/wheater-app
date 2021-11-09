import React, { useEffect, useState } from "react";
import ClimaFinder from "../api/ClimaFinder";

const KEY = "3adcb288670541089c928385ad06ace4";
const pais = "CL";
const ClimaSection = ({ region }) => {
  const [pronostico, setPronostico] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ClimaFinder.get(
          `?city=${region}&country=${pais}&lang=es&key=${KEY}`
        );
        const {
          data: { data },
        } = res;
        console.log(data);
        setPronostico(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [region]);
  return (
    <div>
      <ul style={{ padding: "0px" }}>
        {pronostico &&
          pronostico.map(
            (
              { city_name, lat, lon, solar_rad, weather: { description } },
              i
            ) => (
              <div key={i}>
                <h2>{city_name}</h2>
                <p>
                  <strong>Latitud:</strong> {lat}
                </p>
                <p>
                  <strong>Longitud:</strong> {lon}
                </p>
                <p>
                  <strong>Descripcion:</strong> {description}
                </p>
                <p>
                  <strong>Radiación Solar:</strong> {solar_rad}
                </p>
              </div>
            )
          )}
      </ul>
    </div>
  );
};

export default ClimaSection;
