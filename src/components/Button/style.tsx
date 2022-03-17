/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { ToolTipComponent } from '../ToolTip/style';

interface ButtonProps {
  variant: 'primary' | 'ghost' | 'icon' | 'link' | 'menu';
  full?: boolean;
}

export const ButtonCustom = styled.button<ButtonProps>`
  display: inline-flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  white-space: nowrap;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
  transition: 700ms all ease;
  cursor: pointer;
  position: relative;

  padding: 12px 22px;
  border-radius: 7px;

  background-size: 100%;
  background-position: center;

  ${(props) => {
    switch (props.variant) {
      case 'ghost':
        return `
          background: #d7efff;
          color: #1A57B5;
          &:hover {
            background: #b8e2ff;
          }
        `;
      case 'menu':
        return `
          background: #FFFFFF;
          justify-content: flex-start;
          color: #1A57B5;
          &:hover {
            background: #b8e2ff;
          }
        `;
      case 'icon':
        return `
          background: #d7efff;
          padding: 12px;
          color: #1A57B5;
          width: fit-content;
          border-radius: 50%;
          &:hover {
            background: #b8e2ff;
            color: #1A57B5;
          }
          `;
      case 'link':
        return `
          background: transparent;
          padding: 0;
          color: #1A57B5;
          &:hover {
            color: #42A2E8;
          }
      `;
      case 'primary':
      default:
        return `
          background-size: 200%;
          background-position: 20%;
          background-image: linear-gradient(120deg, #87FFE2 0%, #42A2E8 25%, #1A57B5 50%, #E087FF 100%);
          box-shadow: 0px 5px 4px rgba(26, 87, 181, 0.2);
          color: #FFFFFF;
          &:hover {
            background-position: 80%;
          }
        `;
    }
  }}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

  &:active {
    transform: translateY(3px);
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    & ${ToolTipComponent} {
      opacity: 1;
    }
  }
`;

export default ButtonCustom;
