import styled from 'styled-components';

interface TooltipProps {
  label?: boolean;
}

export const ToolTipComponent = styled.div<TooltipProps>`
  position: absolute;
  opacity: 0;
  z-index: 200;
  z-index: 100;
  transition: 400ms ease all;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -45px;
  padding: 10px;
  background: #042252;
  color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  &::before {
    content: '';
    position: absolute;
    background: #042252;
    padding: 4px;
    top: -3px;
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
  }
`;
