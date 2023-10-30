import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "./CSS/navbar.css"
import "./CSS/form.css"
import "./CSS/index.css"
import "./CSS/pictures.css"
import "./CSS/home.css"
import "./CSS/footer.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
