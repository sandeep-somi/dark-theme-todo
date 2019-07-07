import React from 'react';
import { render } from 'react-dom';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Routes from './routes';

const store = configureStore();

const renderApp = () => render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

if(process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/App', () => renderApp);
}

renderApp();
