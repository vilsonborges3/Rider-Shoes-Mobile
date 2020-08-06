import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

export default function Cart () {
  const total = useSelector(state => state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0));

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subTotal: product.price * product.amount,
  })));

  const dispatch = useDispatch();

  function increment(product){
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement (product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
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
                <RectButton onPress={() =>
                  dispatch(CartActions.removeFromCart(item.id))
                  }>
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
