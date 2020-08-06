import React, {useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';

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

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}));
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);


  function handleCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }


  return (
    <Container>
      <Header navigation={navigation} />
      <ProductsList
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal={true}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
            <ButtonAdd onPress={() => handleCart(item.id)}>
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
