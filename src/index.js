import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AllReducers from './redux/combinedReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = legacy_createStore(AllReducers, {}, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);