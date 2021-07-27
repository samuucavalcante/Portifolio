import React from "react";
import Image from "next/image";
import Sleet from "../../../public/Sleet.png";

import { Container } from "./styles";

export default function WeeklyForecast() {
  return (
    <Container>
      <h3 className="weeklyforecast-title">Tomorrow</h3>
      <Image
        className="weeklyforecast-image"
        src={Sleet}
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
