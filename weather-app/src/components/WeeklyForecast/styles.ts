import styled from "styled-components";

type ContainerP = {
  scale: string[] | string | undefined;
};

export const Container = styled.div<ContainerP>`
  background-color: #1e213a;
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
      color: #e7e7eb;
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
      color: #e7e7eb;
      font-size: 16px;
      &::after {
        content: "º${props => props.scale || 'c'}";
        font-size: 14px;
      }
    }

    &-info-min {
      color: #a09fb1;
      &::after {
        content: "º${props => props.scale || 'c'}";
        font-size: 14px;
      }
    }
  }
`;
