import { HtmlHTMLAttributes } from "react";
import { Container } from "./styles";

import WeeklyForecast from "../../WeeklyForecast";
import CardHighlight from "../../CardHighlight";
import { WeatherData } from "../../../pages";

import Link from 'next/link';
import { useRouter } from "next/router";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  data: WeatherData;
  scale: string[] | string | undefined;
}

export default function TimeInfo({ scale, data, ...rest }: Props) {
  const { query, push } = useRouter();


  const { consolidated_weather } = data;
  const { air_pressure, humidity, visibility, wind_speed } = consolidated_weather[0];
  return (
    <Container scale={scale}  {...rest}>
      <div className="timeinfo-header">
        <div className="timeinfo-header-celsius">
          <span onClick={() => push(query.query ? `?query=${query.query}&scale=c`:`?scale=C` )} className="timeinfo-header-celsius-text">ºC</span>
        </div>
        <div className="timeinfo-header-fahrenheit">
          <span onClick={() => push(query.query ? `?query=${query.query}&scale=f`:`?scale=F` )} className="timeinfo-header-fahrenheit-text">ºF</span>
        </div>
      </div>
      <div className="timeinfo-weather-forecast-weekly">
        {consolidated_weather.map((data, index) => (
          <>
            {index !== 0 && (
              <>
                <WeeklyForecast key={data.id} index={index} data={data} />
              </>
            )}
          </>
        ))}
      </div>

      <div className="timeinfo-highlight">
        <h2 className="timeinfo-highlight-title">Today&apos;s Highlights</h2>
        <div className="timeinfo-highlight-list-card">
          <CardHighlight title="Wind Status" type="mph" value={wind_speed.toFixed(0)} />
          <CardHighlight title="Humidity" type="%" value={humidity.toFixed(0)} progressBar />
          <CardHighlight title="Visibility" type="miles" value={visibility.toFixed(0)} />
          <CardHighlight title="Air Pressure" type="mb" value={air_pressure.toFixed(0)} />
        </div>
      </div>
    </Container>
  );
}
