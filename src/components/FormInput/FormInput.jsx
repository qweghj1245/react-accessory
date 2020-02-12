import React from 'react';

import { Flex } from '../../assets/css/global.style';
import { Wrapper, LabelText, ReInput, Error } from './FormInput.style';

const FormInput = ({ label, placeholder, model, error, type, ...otherStyle }) => {
  return (
    <Wrapper {...otherStyle}>
      <Flex justify='start' align='center'>
        <LabelText mr='20'>{label}</LabelText>
        {
          error ? <Error>{error}</Error> : null
        }
      </Flex>
      <ReInput type={type} placeholder={placeholder} ref={model} {...otherStyle} />
    </Wrapper>
  )
}

export default FormInput;