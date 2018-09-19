import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


import 'bootstrap/dist/js/bootstrap.bundle.min';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import categoryReducer from './store/reducers/category';
import productReducer from './store/reducers/product';

const rootReducer= combineReducers({
    categoryReducer :categoryReducer,
    productReducer :productReducer

})
const store= createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
