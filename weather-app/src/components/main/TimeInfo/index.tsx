import { HtmlHTMLAttributes } from "react";
import { Container } from "./styles";

import WeeklyForecast from "../WeeklyForecast";
import CardHighlight from "../CardHighlight";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function TimeInfo({ ...rest }: Props) {
  
  return (
    <Container {...rest}>
      <div className="timeinfo-header">
        <div className="timeinfo-header-celsius">
          <span className="timeinfo-header-celsius-text">ºC</span>
        </div>
        <div className="timeinfo-header-fahrenheit">
          <span className="timeinfo-header-fahrenheit-text">ºF</span>
        </div>
      </div>

      <div className="timeinfo-weather-forecast-weekly">
        <WeeklyForecast />
        <WeeklyForecast />
        <WeeklyForecast />
        <WeeklyForecast />
        <WeeklyForecast />
      </div>

      <div className="timeinfo-highlight">
        <h2 className="timeinfo-highlight-title">Today&apos;s Highlights</h2>
        <div className="timeinfo-highlight-list-card">
          <CardHighlight title="Wind Status" type="mph" value={7} />
          <CardHighlight title="Humidity" type="%" value={84} progressBar />
          <CardHighlight title="Visibility" type="miles" value="6.4" />
          <CardHighlight title="Air Pressure" type="mb" value="998" />
        </div>
      </div>
    </Container>
  );
}
