import { createContext, useCallback, useContext, useState } from 'react';
import api from '../service/api';

import axios from 'axios';


type ConsolidatedWeather = {
  weather_state_name: string;
  the_temp: number;
}

type Location = {
  title: string;
  consolidated_weather: ConsolidatedWeather[]
}

type LocationContextData = {
  setLocation(id: string): void;
  getLocation: Location;
}

type LocationProviderProps = {
  children: React.ReactNode;
}
const LocationContext = createContext({} as LocationContextData)


export function LocalizationProvider({ children }:LocationProviderProps) {
  const [localization, setLocalization] = useState<Location>({} as Location)
  const setLocation = useCallback((id) => {
    axios.get(`https://www.metaweather.com/api/location/44418/`).then(response => {
      setLocalization(response.data)
    })
  },[])

  return (
    <LocationContext.Provider value={{
      setLocation,
      getLocation: localization
    }} >
      {children}
    </LocationContext.Provider>
  )
}

export function useLocalization() {
  const { getLocation, setLocation } = useContext(LocationContext);

  return {
    getLocation,
    setLocation
  }
}