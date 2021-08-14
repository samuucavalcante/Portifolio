import styled from "styled-components";

export const Container = styled.div`
  padding: 42px 126px;

  .timeinfo-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    &-celsius {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #e7e7eb;
      border-radius: 50%;

      cursor: pointer;
    }

    &-celsius-text {
      color: #110e3c;
      font-weight: 700;
    }

    &-fahrenheit {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #585676;
      border-radius: 50%;
      color: white;
      cursor: pointer;
    }

    &-fahrenheit-text {
      font-weight: 700;
    }
  }

  .timeinfo-weather-forecast-weekly {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }

  .timeinfo-highlight {
    &-title {
      font-size: 24px;
    }

    &-list-card {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 30px 0;
      gap: 30px;
    }
  }
`;
