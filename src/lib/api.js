
import axios from 'axios';
import { getLocal } from './localStorage';

const baseRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PROD,
});

baseRequest.defaults.headers.common['Authorization'] = getLocal('Authorization');

// let headerConfig = {
//   headers: {
//     Authorization: getLocal('Authorization'),
//   }
// };

// user
export const createUser = data => baseRequest.post('/user', data);
export const getUser = () => baseRequest.get('/user');
export const patchUser = data => baseRequest.patch('/user', data);
export const changePassword = data => baseRequest.post('/user/changePassword', data);

//login
export const loginUser = data => baseRequest.post('/user/login', data);
export const googleSign = data => baseRequest.post('/user/googleSignIn', data);
export const logoutUser = (headerConfig) => baseRequest.post('/user/logout', null, headerConfig);