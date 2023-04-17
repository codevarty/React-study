import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// react 18 이후부터 createRoot를 사용해야 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

