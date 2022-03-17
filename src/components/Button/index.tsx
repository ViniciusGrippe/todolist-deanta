import React from 'react';

import { ButtonCustom } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'ghost' | 'icon' | 'link' | 'menu';
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <ButtonCustom {...props}>{children}</ButtonCustom>
    </>
  );
};
export default Button;
