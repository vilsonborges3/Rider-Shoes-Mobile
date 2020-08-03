import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;

`;

export const ProductsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  inverted: true,
})`
`;
export const Product = styled.View`
  background-color: #FFF;
  margin: 15px;
  border-radius: 10px;
  width: 250px;
  height: 400px;
  padding: 10px;
  display: flex;
`;
export const ProductImage = styled.Image`
  width: 230px;
  height: 230px;
`;
export const ProductTitle = styled.Text`
  font-size: 20px;
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const ButtonAdd = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  border-radius: 5px;
  margin-top: auto;
`;
export const CartDetails = styled.View`
  display: flex;
  flex-direction: row;
  padding: 3px;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;
export const CartNumber = styled.Text`
  font-size: 20px;
  padding: 5px;
  color: #fff;
`;

export const TextAdd = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;
