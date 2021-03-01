import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "./redux/store.js"

const render = () => {
  fancyLog();  
  return ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'))
};
render();
store.subscribe(render);
reportWebVitals();
function fancyLog() {
  console.log("%c Rendered with", "background: purple; color: #FFF");
  console.log(store.getState());
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

