import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;

`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.Image`
  width: 100px;
  height: 100px;
  background: #DDD;
`;

export const ProductsList = styled.FlatList`

`;
export const Product = styled.View`

`;
export const ProductImage = styled.Image`

`;
export const ProductTitle = styled.Text`

`;
export const ProductPrice = styled.Text`

`;
export const ButtonAdd = styled(RectButton)`

`;
export const CartDetails = styled.View`

`;
export const CartNumber = styled.Text`

`;

export const TextAdd = styled.Text`

`;
