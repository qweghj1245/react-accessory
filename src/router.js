import Home from './page/Home/Home';
import Products from './page/Products/Products';
import Product from './page/Product/Product';
import MemberRelated from './page/MemberRelated/MemberRelated';
import Profile from './page/Profile/Profile';
import Payment from './page/Payment/Payment';
import Order from './page/Order/Order';
import OrderId from './page/OrderId/OrderId';
import Collection from './page/Collection/Collection';
import About from './page/About/About';
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
  {
    path: '/payment',
    component: Payment,
    name: '結帳',
    breadcrumb: '結帳',
  },
  {
    path: '/order',
    component: Order,
    name: '我的訂單',
    breadcrumb: '我的訂單',
    exact: true,
  },
  {
    path: '/order/:id',
    component: OrderId,
    name: '',
    breadcrumb: '',
    exact: true,
  },
  {
    path: '/collection',
    component: Collection,
    name: '收藏清單',
    breadcrumb: '收藏清單',
  },
  {
    path: '/about',
    component: About,
    name: '關於我們',
    breadcrumb: '關於我們',
  },
];

export default routes;