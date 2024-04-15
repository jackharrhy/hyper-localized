import { useEffect, useState } from "react";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.5556&longitude=-52.7453&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    fetch(WEATHER_API)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!weatherData) {
    return <>...</>;
  }

  return (
    <>
      St. John's
      <br />
      {weatherData.current_weather.temperature} °C
    </>
  );
}
