import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const sagaMiddlewere = createSagaMiddleware();
const  enhancer = process.env.NODE_ENV ==='devepopment'
  ? compose (
    applyMiddleware(sagaMiddlewere)
  )
  : applyMiddleware(sagaMiddlewere);

const store = createStore(rootReducer, enhancer);


sagaMiddlewere.run(rootSaga);

export default store;
