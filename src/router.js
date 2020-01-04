import Home from './page/Home/Home';
import Products from './page/Products/Products';
import Product from './page/Product/Product';
import MemberRelated from './page/MemberRelated/MemberRelated';
import Profile from './page/Profile/Profile';

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
  {
    path: '/login',
    component: MemberRelated,
    name: '登入',
    breadcrumb: '登入',
  },
  {
    path: '/profile',
    component: Profile,
    name: '會員資料',
    breadcrumb: '會員資料',
  },
];

export default routes;