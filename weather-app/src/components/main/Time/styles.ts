import { useRouter } from 'next/router';
import styled from "styled-components";

type ContainerProps = {
  scale: string | string[] |  undefined;
}

export const Container = styled.div<ContainerProps>`
  .time {
    background-image: url('./Cloud-background.png');
    background-repeat: no-repeat;
    background-position: center 65px;
    background-size: 700px 300px;
    background-blend-mode: overlay;
  }
  .time-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 42px 46px;

    &-button {
      width: 161px;
      height: 40px;

      background-color: #6e707a;
      color: white;

      font-size: 16px;
      font-weight: 400;
    }

    &-get-location {
      height: 40px;
      width: 40px;
      background-color: #6e707a;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      padding: 4px;
    }
  }

  .time-body,
  .time-footer {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }

  .time-body {
    &-bg-time {
    }

    &-temperature {
      margin: 48px 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 120px;

      &::after {
        content: "º${props => props.scale || 'C'}";
        display: inline-block;
        font-size: 38px;
        color: #a09fb1;
        font-weight: 600;
      }
    }

    &-weather-forecast {
      font-size: 36px;
      color: #a09fb1;
      font-weight: 600;
    }
  }

  .time-footer {
    margin-top: 62px;

    &-country {
      margin-top: 58px;
      display: flex;
      width: 90px;
      justify-content: space-around;
      align-items: center;

      font-size: 18px;
      color: #a09fb1;
      font-weight: 600;
    }

    &-day,
    &-calendar {
      color: #88869d;
      font-size: 18px;
      font-weight: 500;
    }

    &-day {
      &::after {
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #88869d;
        margin: 0 10px;
        margin-bottom: 3px;
      }
    }
  }
`;
