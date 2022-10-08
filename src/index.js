import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.onscroll = () => {
  let pos = window.scrollY;

  //bearbricks movement
  let big = document.getElementById("big-bear");
  let offset =
    big.getBoundingClientRect().top +
    big.ownerDocument.defaultView.pageYOffset;
  let num = (pos - offset) / 20 + 20;

  big.style.transform = `rotate(${num / 2}deg)`;
  big.style.scale = 1 + num / 100 / 2;
  big.style.translate = `${-40 + num / 6}% ${num / 2}%`;
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);