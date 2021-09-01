import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

const WeatherReport = () => {
  const [inputValue, setinputValue] = useState("Kolkata");
  const [info, setinfo] = useState({});
  const getinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=8957f707b5b79cdfcf3d458a541d731d`;
      let info = await fetch(url);
      let data = await info.json();
      console.log(data)

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
      alert('Please write the city name')
      // <h1>Something went Wrong</h1>;
    }
  };
  useEffect(() => {
    getinfo();
  // eslint-disable-next-line
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
