import styled, { css } from 'styled-components';

interface TextProps {
  variant?: 'title' | 'subtitle' | 'heading' | 'label';
  gutter?: number;
  textAlign?: 'left' | 'center' | 'right';
  truncated?: boolean;
}

interface InputProps {
  clean?: boolean;
  error?: boolean;
}

interface FlexProps {
  width?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | Array<string>;
  alignItems?: 'left' | 'center' | 'right' | 'stretch' | Array<string>;
  padding?: string;
  wrap?: 'wrap' | 'nowrap' | Array<string>;
  direction?: 'row' | 'column' | Array<string>;
  spacing?: number;
}

export const CheckBox = styled.label`
  position: relative;
  --active: linear-gradient(120deg, #1a57b5 0%, #42a2e8 50%, #87ffe2 100%);
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
  & svg {
    display: block;
    position: absolute;
  }
  & input {
    border-radius: 50%;
    display: block;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    box-shadow: inset 0 0 0 3px #ebedf0;
    background: var(--background, transparent);
    transition: all 0.25s linear, box-shadow 0.25s linear;
    & + svg {
      width: 20px;
      height: 15px;
      left: 50%;
      top: 50%;
      fill: #ffffff;
      transform: translate(-50%, -50%);
    }
    &:checked {
      --background: var(--active);
      --border: var(--active);
      & + svg {
        fill: #ffffff;
      }
    }
  }
`;

export const Input = styled.input<InputProps>`
  border: 0;
  padding: 13px 22px;
  width: 100%;
  background: #fff;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  font-weight: normal;
  color: #032152;
  font-size: 1rem;
  line-height: 24px;
  outline: 0;
  transition: 500ms all ease;

  ${(props) =>
    !props.clean &&
    css`
      box-shadow: 0px 0px 0px 2px #ebedf0 inset;
      &:focus {
        box-shadow: 0px 0px 0px 2px #49ace8 inset;
      }
    `}
  &::placeholder {
    color: #03215250;
  }
  &&:disabled {
    color: #bbb;
    text-decoration: line-through;
    font-style: oblique;
  }
  ${(props) =>
    props.error &&
    css`
      box-shadow: 0px 0px 0px 2px red inset;
    `}
`;

export const Text = styled.p<TextProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 400;
  color: #032152;

  margin-bottom: ${(props) => props.gutter}px;

  text-align: ${(props) =>
    (Array.isArray(props.textAlign) ? props.textAlign[0] : props.textAlign) ||
    `left`};

  @media only screen and (max-width: 1024px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[1]
        : props.textAlign};
    `}
  }

  @media only screen and (max-width: 768px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[2]
        : props.textAlign};
    `}
  }

  @media only screen and (max-width: 414px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[3]
        : props.textAlign};
    `}
  }

  ${(props) =>
    props.truncated &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${(props) =>
    props.variant === 'title' &&
    css`
      font-weight: bold;
      font-size: 22px;
      line-height: 28px;
    `}

  ${(props) =>
    props.variant === 'subtitle' &&
    css`
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    `}

  ${(props) =>
    props.variant === 'heading' &&
    css`
      font-weight: bold;
      font-size: 40px;
      line-height: 46px;
    `}

    ${(props) =>
    props.variant === 'label' &&
    css`
      font-weight: bold;
      font-size: 1rem;
      line-height: 16px;
    `}
`;

export const Flex = styled.div<FlexProps>`
  display: inline-flex;

  flex-wrap: ${(props) =>
    (Array.isArray(props.wrap) ? props.wrap[0] : props.wrap) || `nowrap`};

  width: ${(props) =>
    (Array.isArray(props.width) ? props.width[0] : props.width) || `auto`};

  flex-direction: ${(props) =>
    (Array.isArray(props.direction) ? props.direction[0] : props.direction) ||
    `column`};

  padding: ${(props) =>
    Array.isArray(props.padding) ? props.padding[0] : props.padding};

  align-items: ${(props) =>
    (Array.isArray(props.alignItems)
      ? props.alignItems[0]
      : props.alignItems) || `flex-start`};

  justify-content: ${(props) =>
    (Array.isArray(props.justifyContent)
      ? props.justifyContent[0]
      : props.justifyContent) || `flex-start`};

  gap: ${(props) =>
    Array.isArray(props.spacing) ? props.spacing[0] : props.spacing}px;

  @media only screen and (max-width: 1024px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[1]
        : props.direction) || props.direction};

      width: ${Array.isArray(props.width) ? props.width[1] : props.width};

      padding: ${Array.isArray(props.padding)
        ? props.padding[1]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[1]
        : props.alignItems) || `center`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[1]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[1] : props.spacing}px;

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[1] : props.wrap) ||
      `nowrap`};
    `}
  }
  @media only screen and (max-width: 768px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[2]
        : props.direction) || props.direction};

      width: ${Array.isArray(props.width) ? props.width[2] : props.width};

      padding: ${Array.isArray(props.padding)
        ? props.padding[2]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[2]
        : props.alignItems) || `flex-start`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[2]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[2] : props.spacing}px;

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[2] : props.wrap) ||
      `nowrap`};
    `}
  }

  @media only screen and (max-width: 414px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[3]
        : props.direction) || props.direction};

      width: ${Array.isArray(props.width) ? props.width[3] : props.width};

      padding: ${Array.isArray(props.padding)
        ? props.padding[3]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[3]
        : props.alignItems) || `flex-start`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[3]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[3] : props.spacing}px;

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[3] : props.wrap) ||
      `nowrap`};
    `}
  }
`;
