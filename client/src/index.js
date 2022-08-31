import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './styles/fonts/fonts.css'

import rootReducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
