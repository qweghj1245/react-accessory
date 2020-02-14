import React from 'react';
import { Wrapper } from './Alert.style';
const Alert = ({ options, message }) => {
  return (
    <Wrapper type={options.type}>
      {/* {options.type === 'info' && '!'}
      {options.type === 'success' && ':)'}
      {options.type === 'error' && ':('} */}
      {message}
      {/* <Close onClick={close}>X</Close> */}
    </Wrapper>
  )
}

export default Alert;