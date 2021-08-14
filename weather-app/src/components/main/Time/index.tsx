/* eslint-disable @next/next/no-img-element */
import { HtmlHTMLAttributes, useState, useEffect } from "react";
import { Container } from "./styles";
import { BiTargetLock } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import Drawer from "../../Drawer";
import image from "../../../utils/images";
import Image from "next/image";
import { WeatherData } from "../../../pages";
import { formatDateToday } from "../../../utils/formatDate";
import shower from "../../../public/Shower.png";
import handleImage from "../../../utils/images";
import { useRouter } from "next/router";
import convertToFahrenheit from "../../../utils/convertToFahrenheit";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  data: WeatherData;
  scale: string[] | string | undefined;
}

export default function Time({ scale, data, ...rest }: Props) {
  const [drawer, setDrawer] = useState<boolean>(false);

  const { src } = handleImage(data.consolidated_weather[0].weather_state_abbr);
  const router = useRouter();

  return (
    <Container scale={scale} {...rest}>
      {drawer && <Drawer setDrawer={setDrawer} />}
      <div className="time">
        <div className="time-header">
          <button
            onClick={() => setDrawer(true)}
            className="time-header-button"
          >
            Search for places
          </button>
          <div className="time-header-get-location">
            <BiTargetLock color="white" size={28} />
          </div>
        </div>

        <div className="time-body">
          <div className="time-body-bg-time">
            <Image src={src} alt="Shower" width={160} height={150} />
          </div>
          <h1 className="time-body-temperature">
            {router.query.scale === "f" ? (
              <>
                {convertToFahrenheit(
                  data?.consolidated_weather[0].the_temp.toFixed(0)
                )}
              </>
            ) : (
              <>{data?.consolidated_weather[0].the_temp.toFixed(0)}</>
            )}
          </h1>
          <article className="time-body-weather-forecast">
            {data?.consolidated_weather[0].weather_state_name}
          </article>
        </div>

        <div className="time-footer">
          <p className="time-footer-info">
            <span className="time-footer-day">Today</span>
            <span className="time-footer-calendar">{formatDateToday()}</span>
          </p>
          <span className="time-footer-country">
            <TiLocation size={25} color="#A09FB1" />
            <span>{data?.title}</span>
          </span>
        </div>
      </div>
    </Container>
  );
}
