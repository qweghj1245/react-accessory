import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Card from '../../components/Collection/Card/Card';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';
import { Wrapper, Image, ImageFlex } from './Collection.style';
import { Flex } from '../../assets/css/global.style';
import noCollection from '../../assets/img/Collection/pic_heart_non.svg';
import { getCollectionStart, collectStart } from '../../redux/product/product.action';
import { selectCollection, selectAProduct } from '../../redux/product/product.selector';

const Collection = ({ history }) => {
  const dispatch = useDispatch();
  const collection = useSelector(selectCollection);
  const product = useSelector(selectAProduct);
  const alert = useAlert();

  const goToProduct = (id) => {
    history.push(`/product/${id}`);
  }

  const cancelCollect = (id) => {
    dispatch(collectStart({
      id: id,
      isCollected: false,
    }));
    alert.success('刪除成功！');
  }

  useEffect(() => {
    dispatch(getCollectionStart());
  }, [dispatch, product]);

  return (
    <Wrapper>
      {
        collection.length ?
          <Flex align='start' dir='column' mb='50'>
            {
              collection.map(item =>
                <Card key={item._id} item={item} click={() => goToProduct(item._id)} cancel={() => cancelCollect(item._id)} />)
            }
          </Flex> :
          <ImageFlex>
            <Image src={noCollection} width='356' />
          </ImageFlex>
      }
    </Wrapper>
  )
};

export default BaseWrapper(Collection);