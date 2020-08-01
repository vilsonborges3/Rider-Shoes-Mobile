import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const Routes = () => {
  options = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#191920',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#FFF'
  }

  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen
          name='Home'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
