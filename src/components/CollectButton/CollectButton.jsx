import React, { useState } from 'react';
import { Icon } from '../../assets/css/global.style';

import heartEmpty from '../../assets/img/Icon/Icon_heart_empty.svg';
import heartFull from '../../assets/img/Icon/Icon_heart_full.svg';

const CollectButton = () => {
  const [isCollect, setIsCollect] = useState(false);

  return <Icon src={isCollect ? heartFull : heartEmpty} width={29} onClick={() => setIsCollect(!isCollect)}></Icon>
}

export default CollectButton;