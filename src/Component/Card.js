import React, { useEffect, useState } from "react";

const Card = ({ info }) => {
  const [weathermood, setweathermood] = useState();
  const {
    temp,
    humidity,
    weathercondi,
    country,
    name,
    sunrise,
    speed,
    pressure,
  } = info;
  useEffect(() => {
    if (weathercondi) {
      switch (weathercondi) {
        case "Clouds":
          setweathermood("wi-cloudy");
          break;
        case "Haze":
          setweathermood("wi-fog");
          break;
        case "Clear":
          setweathermood("wi-day-sunny");
          break;
        case "Mist":
          setweathermood("wi-dust");
          break;
        case "Rain":
          setweathermood("wi-rain");
          break;

        default:
          setweathermood("wi-day-sunny");
          break;
      }
    }
  }, [weathercondi]);
  let t = sunrise;
  let d = new Date(t * 1000);
  let sunrtime = `${d.getHours()}:${d.getMinutes()}`;

  return (
    <div className="main">
      <h1>Weather Report {name}</h1>
      <div className="weather">
        <i id="logoq" className={`wi ${weathermood}`}></i>
        <div>    <h5 id="heading"> {weathercondi}</h5></div>
      </div>
  
      <div className="datainfo child">
        <div>
          <h2>{(temp - 272).toFixed(1)} °C </h2>
          <p>
            {name} ,{country}
          </p>
        </div>
        <div>
          <h3>Date & Time </h3>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
      <div className="datainfo1">
        <div className="weatherinfo">
          <div>
            <p>
              <i className={"wi wi-sunrise"}></i>
            </p>
            <p>
              {sunrtime} Am <br /> Sunsrise
            </p>
          </div>
          <div>
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p>
              {humidity} <br /> Humidity
            </p>
          </div>
        </div>

        <div className="weatherinfo">
          <div>
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p>
              {pressure} <br /> Pressure
            </p>
          </div>
          <div>
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p>
              {speed} <br /> Speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
