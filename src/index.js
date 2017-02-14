import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const store = createStore(
	rootReducer,
	//So we can use the middleware with devtools
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

render(
	<BrowserRouter>
		<Provider store={store}>
	  		<App />
	  	</Provider>
	</BrowserRouter>,
  document.getElementById('root')
);