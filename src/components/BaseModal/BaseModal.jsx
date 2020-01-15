import React from 'react';
import { Wrapper, Content } from './BaseModal.style';

const BaseModal = ({ children, show, close }) => {
  return (
    <React.Fragment>
      {
        <Wrapper show={show} onClick={close}>
          <Content onClick={(e) => e.stopPropagation()}>
            {children}
          </Content>
        </Wrapper>
      }
    </React.Fragment>
  )
};

export default BaseModal;