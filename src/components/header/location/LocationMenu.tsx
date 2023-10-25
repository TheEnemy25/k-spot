import React, { useState } from "react";
import styles from "./Location.module.scss";

const LocationMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedTheater, setSelectedTheater] = useState<string | null>(null);

  const countries = ["Country1", "Country2", "Country3"];
  const cities = ["City1", "City2", "City3"];
  const theaters = ["Theater1", "Theater2", "Theater3"];

  return (
    <div className={styles.locationMenu}>
      <div className={styles.menuSection}>
        <h2>Select a Country:</h2>
        <ul>
          {countries.map((country) => (
            <li key={country} onClick={() => setSelectedCountry(country)}>
              {country}
            </li>
          ))}
        </ul>
      </div>

      {selectedCountry && (
        <div className={styles.menuSection}>
          <h2>Select a City:</h2>
          <ul>
            {cities.map((city) => (
              <li key={city} onClick={() => setSelectedCity(city)}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCity && (
        <div className={styles.menuSection}>
          <h2>Select a Theater:</h2>
          <ul>
            {theaters.map((theater) => (
              <li key={theater} onClick={() => setSelectedTheater(theater)}>
                {theater}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationMenu;
