import styled from 'styled-components';

export const MessagePop = styled.div`
  position: absolute;
  z-index: 1000;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  background-size: 200%;
  background: linear-gradient(
    120deg,
    #87ffe2 0%,
    #42a2e8 25%,
    #1a57b5 50%,
    #e087ff 100%
  );
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px #11111135;
`;

export const MessasgePopOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
`;
