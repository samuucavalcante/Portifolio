import React from "react";
import clear from "../../../public/Clear.png";
import cloudBackground from "../../../public/Cloud-background.png";
import devChallenges from "../../../public/devchallenges.png";
import hail from "../../../public/Hail.png";
import heavyCloud from "../../../public/HeavyCloud.png";
import heavyRain from "../../../public/HeavyRain.png";
import lightCloud from "../../../public/LightCloud.png";
import lightRain from "../../../public/LightRain.png";
import shower from "../../../public/Shower.png";
import sleet from "../../../public/Sleet.png";
import snow from "../../../public/Snow.png";
import thunderStorm from "../../../public/Thunderstorm.png";

const images = {
  c: clear,
  cloudBackground,
  devChallenges,
  h: hail,
  hr: heavyRain,
  hc: heavyCloud,
  lc: lightCloud,
  lr: lightRain,
  s: shower,
  sl: sleet,
  sn: snow,
  t: thunderStorm
} as const;

export type Images = keyof typeof images;

function handleImage(image: Images):StaticImageData {
  const imageWeather = images[image];
  if(image === undefined) {
    return shower;
  }
  return imageWeather;
}


export default handleImage;
