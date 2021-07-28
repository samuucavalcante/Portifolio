import { HtmlHTMLAttributes } from "react";
import { Container } from "./styles";
import { BiTargetLock } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image from "../../utils/images";
const { cloudBackground } = image;


import Image from "next/image";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function Time({ ...rest }: Props) {
  const { shower } = image;

  return (
    <Container {...rest}>
      <div className="time">
        <div className="time-header">
          <button className="time-header-button">Search for places</button>
          <div className="time-header-get-location">
            <BiTargetLock color="white" size={28} />
          </div>
        </div>

        <div className="time-body">
          <div className="time-body-bg-time">
            <Image alt="Shower" src={shower} width="150" height="180" />
          </div>
          <h1 className="time-body-temperature">15</h1>
          <article className="time-body-weather-forecast">Shower</article>
        </div>

        <div className="time-footer">
          <p className="time-footer-info">
            <span className="time-footer-day">Today</span>
            <span className="time-footer-calendar">Fri. 5 Jun</span>
          </p>
          <span className="time-footer-country">
            <TiLocation size={20} color="#A09FB1" />
            Helsink
          </span>
        </div>
      </div>
    </Container>
  );
}
