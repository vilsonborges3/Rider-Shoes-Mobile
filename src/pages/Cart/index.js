import React, { Component } from 'react';
import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAddRemove from 'react-native-vector-icons/Ionicons';
import { RectButton, Text } from 'react-native-gesture-handler';

import Header from '../../Components/Header'
import {
  Container,
  ProductData,
  ListContainer,
  ImageTitlePrice,
  ProductImage,
  TitlePrice,
  Title,
  Price,
  AmountView,
  ChangeView,
  Amount,
  TextTotal,
  ValueTotal,
  ViewTotal,
  ButtonFinish,
  TextAdd,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [],
  }

  componentDidMount (){
    const { products } = this.state;

    const { route } = this.props;

    const { product } = route.params;

    this.setState({
      products: [
        ...products, product
      ],
    });
  }
  render() {
    const { products } = this.state;

    return (
      <Container>
        <Header />
        <ProductData
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={ ({ item }) => (
            <ListContainer>
              <ImageTitlePrice>
                <ProductImage source={{ uri: item.image }} />
                <TitlePrice>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </TitlePrice>
                <IconDelete name='delete-forever' size={30} color='#7159c1' />
              </ImageTitlePrice>
              <AmountView>
                <ChangeView>
                  <RectButton>
                    <IconAddRemove name='add-circle-outline' size={25} color='#7159c1' />
                  </RectButton>
                  <Amount type="number" readOnly value="1" />
                  <RectButton>
                    <IconAddRemove name='remove-circle-outline' size={25} color='#7159c1' />
                  </RectButton>
                </ChangeView>
                <Price>{item.price}</Price>
              </AmountView>
              <ViewTotal>
                <TextTotal>Total</TextTotal>
                <ValueTotal>328,38</ValueTotal>
                <ButtonFinish>
                  <TextAdd>Finalizar Pedido</TextAdd>
                </ButtonFinish>
              </ViewTotal>
            </ListContainer>
          )}
        />
      </Container>
    );
  }
}
