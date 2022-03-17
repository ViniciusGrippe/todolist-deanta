import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalBody, ModalComponent, ModalOverlay } from './style';

interface Props {
  state: boolean;
  set: any;
  width?: string;
}

const Modal: React.FC<Props> = ({ children, ...props }) => {
  useEffect(() => {
    const close = (e: any) => {
      if (e.key === 'Escape') {
        props.set(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [props, props.state]);

  return (
    <>
      <CSSTransition
        in={props.state}
        timeout={500}
        classNames="modal-overlay"
        unmountOnExit
      >
        <ModalOverlay />
      </CSSTransition>
      <CSSTransition
        in={props.state}
        timeout={500}
        classNames="modal-body"
        unmountOnExit
      >
        <ModalComponent>
          <ModalBody width={props.width}>{children}</ModalBody>
        </ModalComponent>
      </CSSTransition>
    </>
  );
};

export default Modal;
