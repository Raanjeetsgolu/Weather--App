import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

const WeatherReport = () => {
  const [inputValue, setinputValue] = useState("Ballia");
  const [info, setinfo] = useState({});
  const getinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}`;
      let info = await fetch(url);
      let data = await info.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathercondi } = data.weather[0];
      const { country, sunrise } = data.sys;
      const { name } = data;
      const { speed } = data.wind;

      const infodata = {
        temp,
        humidity,
        weathercondi,
        country,
        name,
        sunrise,
        speed,
        pressure,
      };
      setinfo(infodata);
    } catch (error) {
      <h1>Something went Wrong</h1>;
    }
  };
  useEffect(() => {
    // eslint-disable-next-line
    getinfo();
  }, []);
  return (
    <div className="boss">
      <div>
        <input
          className="invalue"
          type="search"
          value={inputValue}
          placeholder="Write the City Name"
          onChange={(e) => setinputValue(e.target.value)}
        ></input>
        <button className="invalue btn" onClick={getinfo}>
          Search
        </button>
      </div>
      <Card info={info} />
    </div>
  );
};

export default WeatherReport;
