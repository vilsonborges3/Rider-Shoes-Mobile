import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <Icon name='delete-forever' size={30} color='#7159c1' />
              </ImageTitlePrice>

              <AmountView>
                <ChangeView>
                  <Icon name='add-circle-outline' size={30} color='#7159c1' />
                  <Amount type="number" readOnly value="1" />
                  <Icon name='remove-circle-outline' size={30} color='#7159c1' />
                </ChangeView>
                <Price>{item.price}</Price>
              </AmountView>
            </ListContainer>
          )}
        />
      </Container>
    );
  }
}
