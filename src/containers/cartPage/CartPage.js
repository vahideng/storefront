import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import BasketItem from '../../components/BasketItem/BasketItem';
import { connect } from 'react-redux';
import image from '../../components/Images/Images';

class CartPage extends Component {
  render() {
    let basketItems = this.props.cart.map((cart, index) => {
      return (
        <tr>
          <th style={{ width: '40%' }}>
            <BasketItem
              key={index}
              imageSource={image[cart.productIndex]}
              productTitle={cart.productTitle}
              productBrand={cart.productBrand}
              dollarSign={"$"}
              productPrice={cart.productPrice}
            />
          </th>
          <th>{cart.productCount}</th>
        </tr>
      );
    });

    let productCount = this.props.cart.map((cart, index) => {
      return <BasketItem key={index} productCount={cart.productCount} />;
    });

    return (
      <div>
        <Table responsive="true">
          <thead>
            <tr>
              <th> PRODUCT </th>
              <th> QUANTITY </th>
              <th> TOTAL </th>
              <th> ACTION </th>
            </tr>
          </thead>
          <tbody>{basketItems}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.productReducer.carts
  };
};

export default connect(mapStateToProps)(CartPage);
