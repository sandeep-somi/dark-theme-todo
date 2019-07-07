import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/index';
import logger from './redux/middlewares/logger';
import monitorReducerEnhancer from './redux/middlewares/monitorReducerEnhancer';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./redux/reducers/index', () => store.replaceReducer(rootReducer))
  }
  return store;
}