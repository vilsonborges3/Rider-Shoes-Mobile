import React from 'react'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/images/Logo.svg';

import { HeaderView, LogoImage, ItensCart, IconeView } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  handlePress = () => {
    navigation.navigate('Cart');
  }

  return (
    <HeaderView>
      <LogoImage source={require( '../../assets/images/Logo.svg' )} />
      <IconeView>
        <TouchableOpacity onPress={handlePress}>
          <ItensCart>{cartSize}</ItensCart>
          <Icon name="basket-sharp" position='absolute' color="#FFF" size={50} />
        </TouchableOpacity>
      </IconeView>
    </HeaderView>
  );
}
