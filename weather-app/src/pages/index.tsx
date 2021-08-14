import { useEffect, useState } from "react";
import Time from "../components/pages/Time";
import TimeInfo from "../components/pages/TimeInfo";
import { useRouter } from "next/router";
import api from "../service/api";
import Spinner from "../components/Spinner";
import { GoAlert } from "react-icons/go";

import { Images } from "../utils/images";


export type ConsolidatedWeather = {
  id: string;
  weather_state_name: string;
  the_temp: number;
  weather_state_abbr: Images;
  min_temp: number;
  max_temp: number;
};

export type WeatherData = {
  title: string;
  woeid: string;
  consolidated_weather: ConsolidatedWeather[];
};

export default function Home() {
  const router = useRouter();
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const [serverError, setServerError] = useState<boolean>(false);

  useEffect(() => {
    setWeather(undefined);
    api
      .get<WeatherData>(`api/location/${router.query.query}`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        api
          .get<WeatherData>("api/location/455819")
          .then((response) => {
            setWeather(response.data);
          })
          .catch(() => {
            setServerError(true);
          });
      });
  }, [router.query]);

  return (
    <div className="container">
      {weather ? (
        <>
          <Time data={weather} className="time" />
          <TimeInfo data={weather} className="time-info" />
        </>
      ) : (
        <>
          {!serverError && (
            <div className="wrap">
              <Spinner />
            </div>
          )}
        </>
      )}

      {serverError && (
        <div className="wrap">
          <h1 className="wrap-title" >Error de Servidor</h1>
          <br />
          <GoAlert color="yellow" size={80} />
          <br />
          <p>Tente novamente mais tarde</p>
        </div>
      )}
      
    </div>
  );
}
