import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;

`;

export const ListContainer = styled.View`

  background-color: #FFF;
  border-radius: 15px;
  padding: 7px;
  flex: 1;
`;

export const List = styled.View`
  background-color: #FFF;
  padding: 10px;

  align-items: center;
`;

export const ImageTitlePrice = styled.View`
  background-color: #FFF;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;
export const TitlePrice = styled.View`
  flex: 1;
  padding: 10px 8px;
`;
export const Title = styled.Text`
  font-size: 17px;
`;
export const Price = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const AmountView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #EEE;
  margin: 10px;
  border-radius: 8px;
  padding: 5px;
  width: 300px;
`;
export const ChangeView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Amount = styled.TextInput`
  background-color: #FFF;
  border-radius: 5px;
  padding: 3px;
  margin: 3px;
  margin-left: 5px;
  margin-right: 5px;
  width: 60px;
  border: #CCC;
`;
export const ViewTotal = styled.View`
  align-items: center;
`;

export const TextTotal = styled.Text`
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 20px;
  color: #BBB;
`;
export const ValueTotal = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;

export const ButtonFinish = styled.TouchableOpacity`
  background-color: #7159c1;
  width: 340px;
  padding: 10px;
  border-radius: 6px;
  margin-top: 30px;

`;

export const TextAdd = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #FFF;
`;
