import React from "react";
import Image from "next/image";
import image from '../../utils/images';

import { Container } from "./styles";

export default function WeeklyForecast() {
  const { sleet } = image;

  return (
    <Container>
      <h3 className="weeklyforecast-title">Tomorrow</h3>
      <Image
        className="weeklyforecast-image"
        src={sleet}
        alt="Sleet"
        width="56"
        height="60"
      />
      <div className="weeklyforecast-info">
        <span className="weeklyforecast-info-max">16</span>
        <span className="weeklyforecast-info-min">11</span>
      </div>
    </Container>
  );
}
