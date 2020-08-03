import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Header from '../../Components/Header';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  };

  handleCart = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  }

  render() {
    const { products } = this.state;

    const { amount } = this.props;

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          horizontal={true}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <ButtonAdd onPress={() => this.handleCart(item)}>
                <CartDetails>
                  <CartNumber>{amount[item.id] || 0}</CartNumber>
                  <Icon name='cart-plus' size={22} color='#fff' />
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
