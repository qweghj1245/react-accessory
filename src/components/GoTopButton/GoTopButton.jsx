import React from 'react';
import { TopButton } from './GoTopButton.style';
import arrow from '../../assets/img/Icon/icon_arrowup.svg';
const GoTopButton = (props) => {

  const GoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <TopButton onClick={GoTop} {...props}><img src={arrow} alt="arrow" /></TopButton>
  )
}

export default GoTopButton;
