import React, { useEffect, useState } from "react";
import ClimaFinder from "../api/ClimaFinder";

import ImagenesRegion from "./ImagenesRegion";

const KEY = "3adcb288670541089c928385ad06ace4";
const pais = "CL";
const today = new Date(),
  time = today.getHours() + ":" + today.getMinutes();
const ClimaSection = ({ region, image }) => {
  const [pronostico, setPronostico] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ClimaFinder.get(
          `?city=${region}&country=${pais}&lang=es&key=${KEY}`
        );
        const {
          data: { data },
        } = res;

        setPronostico(data);
      } catch (error) {
        setError(error);
        alert(`${time} ${error}`);
      }
    };
    fetchData();
  }, [region]);
  return (
    <>
      <div style={{ padding: "0px" }}>
        {pronostico &&
          pronostico.map(
            (
              { city_name, lat, lon, solar_rad, weather: { description } },
              i
            ) => (
              <div key={i} className="mt-3">
                <h2>{city_name}</h2>
                <p>
                  <strong>Latitud:</strong> {lat}
                </p>
                <p>
                  <strong>Longitud:</strong> {lon}
                </p>
                <p>
                  <strong>Descripción:</strong> {description}
                </p>
                <p>
                  <strong>Radiación Solar:</strong> {solar_rad}
                </p>
              </div>
            )
          )}
      </div>
      {err
        ? null
        : image && image.map((im, i) => <ImagenesRegion img={im} key={i} />)}
    </>
  );
};

export default ClimaSection;
