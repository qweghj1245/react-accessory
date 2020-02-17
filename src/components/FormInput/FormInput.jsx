import React, { useState } from 'react';

import { Flex } from '../../assets/css/global.style';
import { Wrapper, LabelText, ReInput, Error } from './FormInput.style';

const FormInput = ({ label, placeholder, model, error, type, defaultValue, inputVal, ...otherStyle }) => {
  const [val, setVal] = useState(defaultValue);
  const changeValue = (e) => {
    setVal(e.target.value);
    if (inputVal) {
      inputVal(e.target.value);
    }
  }
  return (
    <Wrapper {...otherStyle}>
      <Flex justify='start' align='center'>
        <LabelText mr='20'>{label}</LabelText>
        {
          error ? <Error>{error}</Error> : null
        }
      </Flex>
      <ReInput type={type} placeholder={placeholder} value={val} onChange={changeValue} ref={model} {...otherStyle} />
    </Wrapper>
  )
}

export default FormInput;