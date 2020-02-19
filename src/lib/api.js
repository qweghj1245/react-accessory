
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
export const getProducts = data => baseRequest.get('/product', data);

//use script
export const createProducts = data => baseRequest.post('/product/createProdcuts', data);