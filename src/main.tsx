// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log(
  process.env.NODE_ENV,
  process.env.APP_ENV,
  process.env.REACT_APP_API_URL
);

//  开发环境 React.StrictMode 会执行2次， request中存在防抖处理
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
