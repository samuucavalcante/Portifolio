import styled from "styled-components";

export const Container = styled.div`
  width: 459px;
  height: 100vh;
  background-color: #1e213a;
  position: absolute;
  overflow-y: auto;
  padding: 19px 46px;

  z-index: 100;

  .drawer {
    &-close {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-left: 10px;
    }
    &-close-icon {
      cursor: pointer;
    }

    &-search {
      display: flex;
      justify-content: space-between;

      margin: 30px 0px;
    }

    &-search-wrap {
      display: flex;
      align-items: center;
      padding: 2px 10px;
      justify-content: space-between;
      border: 1px solid #e7e7eb;
      width: 100%;
    }

    &-search-wrap-input {
      flex: 1;
      background: transparent;
      font-size: 16px;
      color: white;
      padding: 10px;
    }

    &-search-button {
      margin-left: 10px;
      padding: 13px;
      color: white;
      font-size: 16px;
      background: #3c47e9;
    }

    &-location {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      align-items: center;
      cursor: pointer;

      &:hover {
        border: 1px solid #616475;
        padding: 14px;
      }

      & + div {
        margin: 15px 0px;
      }
    }

    &-location-country {
      color: #e7e7eb;
      font-size: 16px;
    }
  }
`;
