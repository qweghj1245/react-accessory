import cookie from 'js-cookie';

export const saveLocal = (key, value) => {
  if (window.localStorage) {
    localStorage.setItem(key, value);
  }
  cookie.set(key, value);
}

export const getLocal = (key) => {
  if (window.localStorage) {
    return localStorage.getItem(key);
  } else {
    return cookie.get(key);
  }
}

export const removeLocal = (key) => {
  if (window.localStorage) {
    localStorage.removeItem(key);
  } else {
    cookie.remove(key);
  }
}