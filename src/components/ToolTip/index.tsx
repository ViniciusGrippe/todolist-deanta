import React from 'react';
import { ToolTipComponent } from './style';

const ToolTip: React.FC = ({ children, ...props }) => {
  return (
    <>
      <ToolTipComponent>{children}</ToolTipComponent>
    </>
  );
};

export default ToolTip;
