import React from 'react';

import { Wrapper, LabelText, ReInput } from './FormInput.style';

const FormInput = ({ label, placeholder, mb, model }) => {
  return (
    <Wrapper mb={mb}>
      <LabelText>{label}</LabelText>
      <ReInput placeholder={placeholder} ref={model} />
    </Wrapper>
  )
}

export default FormInput;