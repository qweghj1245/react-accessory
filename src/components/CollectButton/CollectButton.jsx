import React, { useState, useEffect } from 'react';
import { Icon } from '../../assets/css/global.style';
import { useAlert } from 'react-alert';
import heartEmpty from '../../assets/img/Icon/Icon_heart_empty.svg';
import heartFull from '../../assets/img/Icon/Icon_heart_full.svg';

const CollectButton = ({ collect, product, user }) => {
  const [isCollect, setIsCollect] = useState(false);
  const alert = useAlert();
  const collecProduct = () => {
    if (!user) return alert.error('請先登入');
    setIsCollect(!isCollect);
    collect(!isCollect);
  }

  useEffect(() => {
    if (user) {
      setIsCollect(product.collector.includes(user._id));
    }
  }, [product, user]);

  return <Icon src={isCollect ? heartFull : heartEmpty} width={29} onClick={collecProduct}></Icon>
}

export default CollectButton;