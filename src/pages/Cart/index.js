import React from 'react';
import { connect } from 'react-redux';
import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAddRemove from 'react-native-vector-icons/Ionicons';
import { RectButton, FlatList } from 'react-native-gesture-handler';

import Header from '../../Components/Header'

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

function Cart ({ cart }) {
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
            </List>
          )}
        />
        <ViewTotal>
          <TextTotal>Total</TextTotal>
          <ValueTotal>328,38</ValueTotal>
        </ViewTotal>
        <ButtonFinish>
          <TextAdd>Finalizar Pedido</TextAdd>
        </ButtonFinish>
      </ListContainer>
    </Container>
  );
  }

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
