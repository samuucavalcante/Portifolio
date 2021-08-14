import React from 'react';
import { LocalizationProvider } from './Localization';

type Props = {
  children: React.ReactNode;
};
export default function AppProvider( { children }:Props) {
  return(
    <LocalizationProvider>
      {children}
    </LocalizationProvider>
  )
}