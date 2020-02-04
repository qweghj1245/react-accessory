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
import ShoppingNotes from './page/ShoppingNotes/ShoppingNotes';
import BackStage from './page/BackStage/BackStage';
import TotalView from './page/BackStage/TotalView/TotalView';
import BackstageOrder from './page/BackStage/Order/Order';
import BackstageOrderId from './page/BackStage/OrderId/OrderId';
import BackstageProducts from './page/BackStage/Products/Products';
import BackstageUser from './page/BackStage/User/User';
import BackstageDiscount from './page/BackStage/Discount/Discount';
import BackstageBulletin from './page/BackStage/Bulletin/Bulletin';
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
    newPath: '/products',
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
    newPath: '/order',
    component: OrderId,
    name: '',
    breadcrumb: '我的訂單',
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
  {
    path: '/shopping_notes',
    component: ShoppingNotes,
    name: '購物須知',
    breadcrumb: '購物須知',
  },
  {
    path: '/backstage',
    component: BackStage,
    name: '後台',
    breadcrumb: '後台',
    children: [
      {
        path: '/backstage/total_view',
        component: TotalView,
        name: '總覽',
      },
      {
        path: '/backstage/order',
        component: BackstageOrder,
        name: '訂單',
      },
      {
        path: '/backstage/order/:id',
        component: BackstageOrderId,
        name: '訂單',
      },
      {
        path: '/backstage/products',
        component: BackstageProducts,
        name: '商品',
      },
      {
        path: '/backstage/user',
        component: BackstageUser,
        name: '會員',
      },
      {
        path: '/backstage/discount',
        component: BackstageDiscount,
        name: '折扣',
      },
      {
        path: '/backstage/bulletin',
        component: BackstageBulletin,
        name: '公告',
      }
    ],
  },
];

export default routes;