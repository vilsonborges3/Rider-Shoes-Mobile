import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import {
  Container,
  Header,
  LogoImage,
  ProductsList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonAdd,
  CartDetails,
  CartNumber,
  TextAdd
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    console.log(response.data);
    this.setState({ products: response.data });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Header>
          <LogoImage source={{ uri: '../../assets/images/Logo.png' }} />
          <Icon name="cart" color="#FFF" size={50} />
        </Header>
        <Product>
          <ProductImage source={{ uri: 'https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-feminino/52/D22-3838-252/D22-3838-252_zoom2.jpg?ts=1587151665&ims=326x' }} />
          <ProductTitle>Tenis legal</ProductTitle>
          <ProductPrice>128,39</ProductPrice>
          <ButtonAdd>
            <CartDetails>
              <CartNumber>0</CartNumber>
              <Icon name='cart-plus' size={22} color='#fff' />
            </CartDetails>
            <TextAdd>Adiconar</TextAdd>
          </ButtonAdd>
        </Product>
      </Container>
    );
  }
}
