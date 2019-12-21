import React from 'react';
import { ButtonWrapper } from './BaseButton.style';

const BaseButton = ({ children, ...props }) => (
  <ButtonWrapper {...props}>
    {children}
  </ButtonWrapper>
);

export default BaseButton;