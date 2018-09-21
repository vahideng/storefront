import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import BasketItem from '../../components/BasketItem/BasketItem';
import { connect } from 'react-redux';
import image from '../../components/Images/Images';
import * as actions from '../../store/actions/category';
import Counter from '../../components/Counter/Counter';

class CartPage extends Component {
  state = {
    productTotalPrice: '',
    counter :0 
  };

  deleteProduct = index => {
    this.props.onRemoveProduct(index);
  };

  increaserProductPayload = (index,count,price) => {

    let updatedCount  = count +1
    let totalPrice = price *updatedCount
    console.log(totalPrice, "total price cat page");
    
   this.props.onAddIncrement(index, updatedCount,totalPrice)
  };

  decreaseProductPayload = (index,count,price) => {
if(count  >= 1 ){
  let updatedCount  = count -1
    let totalPrice = price *updatedCount
    console.log(totalPrice, "total price cat page");
    
   this.props.onAddIncrement(index, updatedCount,totalPrice)
}

    
  };
  
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
        <tr>
          <th style={{ width: '40%' }}>
            <BasketItem
              key={index}
              imageSource={image[cart.productIndex]}
              productTitle={cart.productTitle}
              productBrand={cart.productBrand}
              dollarSign={'$'}
              productPrice={cart.productPrice}
            />
          </th>
          <th>{<Counter btnType="viewCartCounter" count={cart.productCount} 
          increaseCount= {()=>this.increaserProductPayload(cart.productIndex, cart.productCount, cart.productPrice)}
          decreaseCount= {()=>this.decreaseProductPayload(cart.productIndex, cart.productCount, cart.productPrice)}
          />} 
          </th>
          <th style={{fontSize: '1.4rem'}}>{cart.totalPrice} </th>
          <th
            style={{ cursor: 'pointer' , width:'10px',fontSize: '1.6rem' ,paddingRight: '20px'  }}
            onClick={() => this.deleteProduct(cart.productIndex)}
          >
            X
          </th>
        </tr>
      );
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
const mapDispatchToProps = dispatch => {
  return {
    onRemoveProduct: index => dispatch(actions.removeProduct(index)),
    onAddIncrement: (index,productCount,totalPrice)=> dispatch(actions.incrementCounter(index,productCount,totalPrice)),
    onAddIncrement: (index,productCount,totalPrice)=> dispatch(actions.decrementCounter(index,productCount,totalPrice))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
