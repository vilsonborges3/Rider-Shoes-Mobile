import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/images/Logo.svg';

import { HeaderView, LogoImage } from './styles';

export default function Header() {
  return (
    <HeaderView>
      <LogoImage source={require( '../../assets/images/Logo.svg' )} />
      <Icon name="basket-sharp" color="#FFF" size={50} />
    </HeaderView>
  );
}
