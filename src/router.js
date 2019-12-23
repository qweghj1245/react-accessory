import Home from './page/Home/Home';
import Products from './page/Products/ProductsWrapper';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: '首頁',
  },
  {
    path: '/products',
    component: Products,
    name: '全部商品',
  },
];

export default routes;