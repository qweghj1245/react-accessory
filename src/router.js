import Home from './page/Home/Home';
import Products from './page/Products/Products';
import Product from './page/Product/Product';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: '首頁',
    breadcrumb: '首頁',
  },
  {
    path: '/products',
    component: Products,
    name: '全部商品',
    breadcrumb: '全部商品',
  },
  {
    path: '/product/:id',
    component: Product,
    name: '',
    breadcrumb: '全部商品',
  },
];

export default routes;