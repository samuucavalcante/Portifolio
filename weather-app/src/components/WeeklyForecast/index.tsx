import React from "react";
import Image from "next/image";
import { formatDateAdd } from '../../utils/formatDate';
import { Container } from "./styles";
import { ConsolidatedWeather } from "../../pages";
import handleImage from "../../utils/images";
import { useRouter } from "next/router";
import convertToFahrenheit from "../../utils/convertToFahrenheit";


type WeeklyForecastProps = {
  data: ConsolidatedWeather; 
  index: number; 
}

export default function WeeklyForecast({ data, index }:WeeklyForecastProps) {
  const router = useRouter();
  const { scale } = router.query;

  return (
    <Container scale={scale}>
      {console.log(scale)}
      <h3 className="weeklyforecast-title">{index === 1 ? 'Tomorrow' :formatDateAdd(index)}</h3>
      <Image
        className="weeklyforecast-image"
        src={handleImage(data.weather_state_abbr)}
        alt="Sleet"
        width="56"
        height="60"
      />
      <div className="weeklyforecast-info">
        <span className="weeklyforecast-info-max">{scale === 'f' ? convertToFahrenheit(data.max_temp.toFixed(0)) :data.max_temp.toFixed(0)}</span>
        <span className="weeklyforecast-info-min">{scale === 'f' ? convertToFahrenheit(data.min_temp.toFixed(0)) :data.min_temp.toFixed(0)}</span>
      </div>
    </Container>
  );
}
