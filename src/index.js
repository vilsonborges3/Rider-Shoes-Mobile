import * as React from 'react';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';

import {
  View,
  Text,
} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#191920"/>
      <Routes />
    </>
  );
}
