import React from 'react';

import { Wrapper, LabelText, ReInput } from './FormInput.style';

const FormInput = ({ label, placeholder, model, ...otherStyle }) => {
  return (
    <Wrapper {...otherStyle}>
      <LabelText>{label}</LabelText>
      <ReInput placeholder={placeholder} ref={model} {...otherStyle}/>
    </Wrapper>
  )
}

export default FormInput;