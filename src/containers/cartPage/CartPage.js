import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import BasketItem from '../../components/BasketItem/BasketItem';
import { connect } from 'react-redux';
import image from '../../components/Images/Images';
import * as actions from '../../store/actions/category';
import Counter from '../../components/Counter/Counter';
import Button from '../../UI/Button/Button';

import { LinkContainer } from 'react-router-bootstrap';

class CartPage extends Component {
  state = {
    totalPrice: 0,
    counter: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cart !== prevProps.cart) {
      this.calculateTotalPrice();
    }
  }
  componentWillMount() {
    this.calculateTotalPrice();
  }

  deleteProduct = index => {
    this.props.onRemoveProduct(index);
  };

  increaserProductPayload = (index, count, price) => {
    let updatedCount = count + 1;
    let totalPrice = price * updatedCount;
    console.log(totalPrice, 'increaserProductPayload  total price in cart page');

    this.props.onAddIncrement(index, updatedCount, totalPrice);
  };

  decreaseProductPayload = (index, count, price) => {
    if (count >= 1) {
      let updatedCount = count - 1;
      let totalPrice = price * updatedCount;
      console.log(totalPrice, 'decreaseProductPayload total price in cart page');

      this.props.onRemoveDecrement(index, updatedCount, totalPrice);
    }
  };

  calculateTotalPrice() {
    let totalPrice = 0;
    this.props.cart.map(pro => {
      return (totalPrice += pro.totalPrice);
    });
    this.setState({ totalPrice });
    console.log(totalPrice, 'totalPrice in cart page');
  }

  // decreaseProductPayload = (productTitle, productIndex, price, productBrand) => {

  //  let  productCount= this.props.cart[productIndex].productCount

  //  console.log(productCount , "product count");

  //const productTotalPrice = productCount * price;

  // this.props.onAddProductToCart(
  //   productTitle,
  //   productIndex,
  //   productCount,
  //   productBrand,
  //   price,
  //   productTotalPrice
  // );
  // };

  render() {
    let basketItems = this.props.cart.map((cart, index) => {
      return (
        <tr key={index}>
          <th style={{ width: '40%' }}>
            <BasketItem
             
              imageSource={image[cart.productIndex]}
              productTitle={cart.productTitle}
              productBrand={cart.productBrand}
              dollarSign={'$'}
              productPrice={cart.productPrice}
            />
          </th>
          <th>
            {
              <Counter
              
                btnType="viewCartCounter"
                count={cart.productCount}
                increaseCount={() =>
                  this.increaserProductPayload(
                    cart.productIndex,
                    cart.productCount,
                    cart.productPrice
                  )
                }
                decreaseCount={() =>
                  this.decreaseProductPayload(
                    cart.productIndex,
                    cart.productCount,
                    cart.productPrice
                  )
                }
              />
            }
          </th>
          <th style={{ fontSize: '1.4rem' }}>{cart.totalPrice} </th>
          <th
            style={{
              cursor: 'pointer',
              width: '10px',
              fontSize: '1.6rem',
              paddingRight: '20px',
              color: 'gray'
            }}
            onClick={() => this.deleteProduct(cart.productIndex)}
          >
            X
          </th>
        </tr>
      );
    });

    let totalPrice = <div style={{color: 'gray'}}>${this.state.totalPrice.toFixed(2)} </div>;
    console.log("inja");
    

    let totalPriceCad = <div>${this.state.totalPrice.toFixed(2)} CAD </div>;

    return (
      <div style={{backgroundColor:'#DCDCDC', textAlign: 'center' }}>
      <h1 style={{paddingBottom: '40px', paddingTop: '40px'}}> Shopping Cart </h1>
      <div style={{margin : '0 16%', backgroundColor:'white'}}>
        <Table >
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
        <hr />
        <Row>
          <Col xs={6} xsOffset={6}>
            <Row
              style={{
                marginBottom: '20px',
                color: 'gray',
                fontSize: '1.2rem'
              }}
            >
              <Col xs={6}>CART OVERVIEW</Col>
            </Row>
            <Row
              style={{
                marginBottom: '20px',
                color: 'gray',
                fontSize: '1.4rem'
              }}
            >
              <Col xs={6}>SUBTOTAL</Col>
              <Col xs={6}>{totalPrice}</Col>
            </Row>
            <Row
              style={{
                marginBottom: '20px',
                color: 'gray',
                fontSize: '1.4rem'
              }}
            >
              <Col xs={6}>TOTAL</Col>
              <Col xs={6} style={{ color: 'black' }}>
                {totalPriceCad}
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col xs={6} >
          <div>
            <LinkContainer style={{color:'black', fontSize:'1.2rem', cursor:'pointer', textDecoration:'underline'}} to={'/'}>
              <p  >CONTINUE SHOPPING</p>
            </LinkContainer>
            </div>
          </Col>
          <Col xs={6}  >
            <Button style={{float : 'none' }} inside="Checkout"/>
          </Col>
        </Row>
        
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.productReducer.carts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemoveProduct: index => dispatch(actions.removeProduct(index)),
    onAddIncrement: (index, productCount, totalPrice) =>
      dispatch(actions.incrementCounter(index, productCount, totalPrice)),
    onRemoveDecrement: (index, productCount, totalPrice) =>
      dispatch(actions.decrementCounter(index, productCount, totalPrice))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
