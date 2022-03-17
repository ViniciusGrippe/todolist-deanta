import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Text } from '../../styles/ComponentsUI';
import { MessagePop, MessasgePopOverlay } from './style';

interface Props {
  open: boolean;
}

const MessageToast: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <CSSTransition
        in={props.open}
        timeout={500}
        classNames="modal-body"
        unmountOnExit
      >
        <MessasgePopOverlay>
          <MessagePop>
            <Text style={{ color: '#FFFFFF' }}>{children}</Text>
          </MessagePop>
        </MessasgePopOverlay>
      </CSSTransition>
    </>
  );
};

export default MessageToast;
