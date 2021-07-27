import styled from "styled-components";

export const Container = styled.div`
  background-color: #1E213A;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 150px;
  border-radius: 2px;

  padding: 10px;

  text-align: center;

  .weeklyforecast {

    &-title {
      font-size: 16px;
      font-weight: 500;
      color: #E7E7EB;
    }

    &-info {
      display: flex;
      height: 35px;
      width: 100px;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 15px;
    }

    &-info-max {
      color: #E7E7EB;
      font-size: 16px;
      &::after {
        content: 'ºc';
        font-size: 14px;
        
      }
    }

    &-info-min {
      color: #A09FB1;
      &::after {
        content: 'ºc';
        font-size: 14px;
        
      }
    }
  }

  
`;
