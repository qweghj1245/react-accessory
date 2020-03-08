import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import BaseSelect from '../../BaseSelect/BaseSelect';
import { Wrapper, Flexer, Circle, Texture, FlexBetween } from './Card.style';
import { ImageWrapper, Icon, Flex } from '../../../assets/css/global.style';
import heartFull from '../../../assets/img/Icon/Icon_heart_full.svg';
import heart from '../../../assets/img/Icon/Icon_cart_heartempty_small.svg';
import trash from '../../../assets/img/Icon/Icon_heart_trash.svg';
import { collectCartStart, deleteCartStart } from '../../../redux/cart/cart.action';

const Card = ({ product, user, resetList }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [collected, setCollected] = useState(product.collector.includes(user._id));

  const allQuantity = () => {
    let store = [];
    for (let i = 1; i <= product.quantity; i++) {
      store.push({
        value: i,
        label: i,
      });
    }
    return store;
  };
  const getQuatity = (quantity) => {
    resetList({
      quantity,
      id: product.productId,
    });
  }
  const setCollect = () => {
    setCollected(!product.collector.includes(user._id));
    dispatch(collectCartStart({
      id: product.productId,
      isCollected: !product.collector.includes(user._id),
    }));
  }
  const deleteCart = () => {
    dispatch(deleteCartStart(product.id));
    alert.success('刪除成功！');
  }

  return (
    <Wrapper>
      <Flex>
        <ImageWrapper src={product.photos[0]} width={window.innerWidth > 960 ? '120' : '80'} />
        <Flexer>
          <Flex justify='start'>
            {
              product.color ? <Circle color={product.color} mr='8' /> : null
            }

            {
              product.size ? <Texture mb='28'>{product.size}</Texture> : null
            }
          </Flex>
          <Texture mb='28'>{product.name}</Texture>
          <Texture>{`NT$${product.price}`}</Texture>
        </Flexer>
      </Flex>
      <Flexer>
        <BaseSelect
          triangle
          placeholder='1'
          options={allQuantity()} defaultV={product.purchaseQuantity}
          change={getQuatity}
          width='60px'
          height='28px'
          border='#999999'
        />
        <FlexBetween>
          <Icon src={collected ? heartFull : heart} width='21' onClick={setCollect} />
          <Icon src={trash} width='18' onClick={deleteCart} />
        </FlexBetween>
      </Flexer>
    </Wrapper>
  )
}

export default React.memo(Card);