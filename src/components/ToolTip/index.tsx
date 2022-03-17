import React from 'react';
import { ToolTipComponent } from './style';

const ToolTip: React.FC = ({ children }) => {
  return (
    <>
      <ToolTipComponent>{children}</ToolTipComponent>
    </>
  );
};

export default ToolTip;
