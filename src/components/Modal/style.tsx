import styled from 'styled-components';

export const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: #04225280;
  backdrop-filter: blur(7px);
`;

export const ModalBody = styled.div<{ width?: string }>`
  position: absolute;
  z-index: 102;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  border-radius: 20px;
  padding: 20px;
  min-width: 300px;
  width: ${(props) => props.width || 'auto'};
  background: #fff;
`;
