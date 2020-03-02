
import axios from 'axios';
import { getLocal } from './localStorage';

const baseRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PROD,
});

baseRequest.defaults.headers.common['Authorization'] = getLocal('Authorization');

//aws s3
export const putImage = (url, file) => axios.put(url, file, {
  headers: {
    'Content-Type': file.type,
  },
});

// user
export const createUser = data => baseRequest.post('/user', data);
export const getUser = () => baseRequest.get('/user');
export const patchUser = data => baseRequest.patch('/user', data);
export const changePassword = data => baseRequest.post('/user/changePassword', data);

//login
export const loginUser = data => baseRequest.post('/user/login', data);
export const googleSign = data => baseRequest.post('/user/googleSignIn', data);
export const logoutUser = (headerConfig) => baseRequest.post('/user/logout', null, headerConfig);

//product
export const createProducts = data => baseRequest.post('/product/createProdcuts', data);
export const getProducts = () => baseRequest.get('/product');
export const getProduct = id => baseRequest.get(`/product/getProductById/${id}`);
export const collectProduct = data => baseRequest.post('/product/collectProduct', data);
export const getCollection = () => baseRequest.post('/product/getCollectProducts');

//cart
export const addToCart = data => baseRequest.post('/cart', data);
export const getCart = () => baseRequest.get('/cart');
export const deleteCart = data => baseRequest.post('/cart/deleteCart', data);

//order
export const createOrder = data => baseRequest.post('/order', data);
export const getOrder = data => baseRequest.post('/order/getOrder', data);
export const getOrders = () => baseRequest.get('/order');
export const patchOrder = data => baseRequest.patch('/order/updateOrderStatus', data);