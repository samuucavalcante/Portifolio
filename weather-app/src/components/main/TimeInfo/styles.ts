import styled from "styled-components";

type ContainerP = {
  scale: string[] | string | undefined; 
}

export const Container = styled.div<ContainerP>`
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
      background-color:${props => props.scale === 'c' ?'#e7e7eb' :'#585676' };
      border-radius: 50%;


      cursor: pointer;
    }

    &-celsius-text {
      color: ${props => props.scale === 'c' ?'#110E3C' :'#E7E7EB' };
      font-weight: 700;

    }

    &-fahrenheit {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: ${props => props.scale === 'f' ?'#e7e7eb' :'#585676' };
      border-radius: 50%;
      cursor: pointer;
    }

    &-fahrenheit-text {
      font-weight: 700;
      color: ${props => props.scale === 'f' ?'#110E3C' :'#E7E7EB' };

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
