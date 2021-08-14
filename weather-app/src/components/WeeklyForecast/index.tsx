import React from "react";
import Image from "next/image";
import image from '../../utils/images';
import sleet from '../../../public/Sleet.png';

import { Container } from "./styles";
import { ConsolidatedWeather } from "../../pages";
import handleImage from "../../utils/images";


type WeeklyForecastProps = {
  data: ConsolidatedWeather;  
}

export default function WeeklyForecast({ data }:WeeklyForecastProps) {
  return (
    <Container>
      <h3 className="weeklyforecast-title">Tomorrow</h3>
      <Image
        className="weeklyforecast-image"
        src={handleImage(data.weather_state_abbr)}
        alt="Sleet"
        width="56"
        height="60"
      />
      <div className="weeklyforecast-info">
        <span className="weeklyforecast-info-max">{data.max_temp}</span>
        <span className="weeklyforecast-info-min">{data.min_temp}</span>
      </div>
    </Container>
  );
}
