import styled,  { keyframes } from 'styled-components';

const ldio = keyframes`
0% {
  top: 96px;
  left: 96px;
  width: 0;
  height: 0;
  opacity: 1;
}

100% {
  top: 32px;
  left: 32px;
  width: 128px;
  height: 128px;
  opacity: 0;
}
`
export const Container = styled.div`
   width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;

    .ldio-u69yhgmewbr {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  .ldio-u69yhgmewbr div {
    box-sizing: content-box;
  }

  .ldio-u69yhgmewbr div:nth-child(1) {
    border-color: whitesmoke;
    animation-delay: 0s;
  }

  .ldio-u69yhgmewbr div:nth-child(2) {
    border-color: white;
    animation-delay: -0.819672131147541s;
  }

  .ldio-u69yhgmewbr div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ${ldio} 1.639344262295082s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;

