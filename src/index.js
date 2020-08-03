import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barSyle="light-content" backgroundColor="#191920"/>
      <Routes />
    </Provider>
  );
}
