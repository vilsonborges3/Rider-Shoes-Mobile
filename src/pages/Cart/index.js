import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAddRemove from 'react-native-vector-icons/Ionicons';
import { RectButton, FlatList } from 'react-native-gesture-handler';

import Header from '../../Components/Header'

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ListContainer,
  List,
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

function Cart ({ cart, total, removeFromCart, updateAmount }) {
  function increment(product){
    updateAmount(product.id, product.amount + 1);
  }

  function decrement (product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Header />
      <ListContainer>
        <FlatList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={ ({ item }) => (
            <List>

              <ImageTitlePrice>
                <ProductImage source={{ uri: item.image }} />
                <TitlePrice>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </TitlePrice>
                <RectButton onPress={() => removeFromCart(item.id)}>
                  <IconDelete name='delete-forever' size={30} color='#7159c1' />
                </RectButton>
              </ImageTitlePrice>
              <AmountView>
                <ChangeView>
                  <RectButton onPress={() => decrement(item)}>
                    <IconAddRemove name='remove-circle-outline' size={25} color='#7159c1' />
                  </RectButton>
                  <Amount type="number" readOnly value={String(item.amount)} />
                  <RectButton onPress={() => increment(item)}>
                    <IconAddRemove name='add-circle-outline' size={25} color='#7159c1' />
                  </RectButton>
                </ChangeView>
                <Price>{item.subTotal}</Price>
              </AmountView>
            </List>
          )}
        />
        <ViewTotal>
          <TextTotal>Total</TextTotal>
          <ValueTotal>{total}</ValueTotal>
        </ViewTotal>
        <ButtonFinish>
          <TextAdd>Finalizar Pedido</TextAdd>
        </ButtonFinish>
      </ListContainer>
    </Container>
  );
  }

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
