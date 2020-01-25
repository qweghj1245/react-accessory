import React from 'react';

import { Texture, Wrapper } from './PositionText.style';
import { Icon } from '../../../assets/css/global.style';
import location from '../../../assets/img/Backstage/Icon_material-location-on.svg';

const PositionText = ({ title }) => {
  return (
    <Wrapper justify='start'>
      <Icon src={location} width='10' mr='5' />
      <Texture>{title}</Texture>
    </Wrapper>
  )
}

export default PositionText;