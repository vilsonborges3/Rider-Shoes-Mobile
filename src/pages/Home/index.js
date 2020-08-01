import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import { Logo } from '../../assets/images/Logo.png';

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

  async componentDidMount(){
    console.log('test');
    const response = await api.get('products');

    console.log(response.data);
    this.setState({ products: response.data });
  }


  render() {
    const { products } = this.state;

    return (
      <Container>
        <Header>
          <LogoImage source={{ uri: Logo }} />
          <Icon name="cart" color="#FFF" size={50} />
        </Header>
        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <ButtonAdd>
                <CartDetails>
                  <Icon name='cart-plus' size={40} />
                  <CartNumber>0</CartNumber>
                </CartDetails>
                <TextAdd>Adiconar</TextAdd>
              </ButtonAdd>
            </Product>
          )}
        />
      </Container>
    );
  }
}
