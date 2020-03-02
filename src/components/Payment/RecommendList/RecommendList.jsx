import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '../../Card/Card';
import { Title, Wrapper, CardWrap } from './RecommendList.style';
import { selectProducts } from '../../../redux/product/product.selector';
import { getProductsStart } from '../../../redux/product/product.action';
const RecommendList = ({ history }) => {
  const dispatch = useDispatch();
  const products =  useSelector(selectProducts);

  const randomProducts = () => {
    if (!products.length) return [];
    let randomStore = [];
    let json = [];
    let productsStore = [];

    while (randomStore.length < 4) {
      const random = Math.floor(Math.random() * products.length);
      if (!json[random]) {
        json[random] = true;
        randomStore.push(random);
      }
    }

    randomStore.forEach(item => {
      productsStore.push(products[item]);
    });

    return productsStore;
  };

  useEffect(() => {    
    dispatch(getProductsStart());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>推薦商品</Title>
      <CardWrap>
        {
          randomProducts().map(item => <Card key={item._id} item={item} height='142' goProduct={() => history.push(`/product/${item._id}`)}/>)
        }
      </CardWrap>
    </Wrapper>
  )
}

export default withRouter(RecommendList);