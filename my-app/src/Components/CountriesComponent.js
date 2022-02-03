import React, { useState } from "react";
import styled from "styled-components";
import { addCountries } from "../Helper";
const CountriesConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Countries = styled.div`
  width: 220px;
  height: 95px;
  border: 1px solid;
  margin: 10px;
`;

const CountriesComponent = (props) => {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v2/name/${counry}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCountries(result);
  //     });
  // }, []);

  return (
    <>
      <button onClick={() => addCountries(setCountries, country, countries)}>
        Click
      </button>
      <input type="text" onChange={(e) => setCountry(e.target.value)} />
      <CountriesConteiner>
        {countries.map((item) => (
          <Countries key={item.numericCode}>
            <p>Страна:{item.name}</p>
            <p>Население: {item.population}</p>
            <p>Рeгион: {item.region}</p>
          </Countries>
        ))}
      </CountriesConteiner>
    </>
  );
};

export default CountriesComponent;
