import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDesctiption from '../../components/ProductDescription/ProductDescription';
import image from '../../components/Images/Images';
import * as actions from '../../store/actions/category';
import AUX from '../../hoc/Aux/Aux';

class product extends Component {
  state = {
    counter: 0,

    popUpShow: false
  };

  handleUpdateMessage = productUpdated => {
    //to show product added message to user

    if (productUpdated) {
      this.setPopupOff = setTimeout(() => {
        this.setState(() => ({ popUpShow: false }));
      }, 1000);

      return (
        <div
          style={{
            textAlign: 'center',
            transition: '0.5s ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
            paddingTop: '40px',
            width: '200px',
            backgroundColor: 'gray',
            color: 'white',
            height: '90px'
          }}
        >
          Product Added To Cart
        </div>
      );
    }
  };

  setProductCountFromRedux = counter => {
    console.log(this.props.productCount[counter], 'counter');
    this.setState({ productCount: this.props.productCount[counter] });
  };

  addProductToRedux = (productTitle, productIndex, price, productBrand) => {
    const productCount = this.state.counter;
    const productTotalPrice = productCount * price;
    console.log(price, 'price');
    this.setState({ popUpShow: true });
    this.props.onAddProductToCart(
      productTitle,
      productIndex,
      productCount,
      productBrand,
      price,
      productTotalPrice
    );
  };

  increaserProductPayload = () => {
    let updatedProductCount = this.state.counter;
    updatedProductCount = updatedProductCount + 1;
    this.setState({ counter: updatedProductCount });
  };
  decreaseProductPayload = () => {
    let updatedProductCount = this.state.counter;
    updatedProductCount = updatedProductCount - 1;
    this.setState({ counter: updatedProductCount });
  };

  render() {
    // console.log(this.state.myCart, 'mycart');
    // console.log(this.state.popUpShow, 'popUpShow');
    console.log(this.props,"product props ******");

    let isProductAvailable = 'product is not loaded';
    if (this.props.product[this.props.match.params.id]) {
      isProductAvailable = (
        <ProductDesctiption
          title={this.props.product[this.props.match.params.id].title}
          description={this.props.product[this.props.match.params.id].description}
          imageSource={image[this.props.match.params.id]}
          brand={this.props.product[this.props.match.params.id].brand}
          price={this.props.product[this.props.match.params.id].price}
          add={() =>
            this.addProductToRedux(
              this.props.product[this.props.match.params.id].title,
              this.props.productIndex,
              this.props.product[this.props.match.params.id].price,
              this.props.product[this.props.match.params.id].brand
            )
          }
          increaseCount={this.increaserProductPayload}
          count={this.state.counter}
          decreaseCount={this.decreaseProductPayload}
          productCount={() =>
            this.setProductCountFromRedux(
              this.props.product[this.props.match.params.id].title,
              this.props.match.params.id
            )
          }
        />
      );
    }
    return (
      <AUX>
        <div style={{ marginTop: '10%' }}>{isProductAvailable}</div>

        {this.handleUpdateMessage(this.state.popUpShow)}
      </AUX>
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.categoryReducer.product,
    productIndex: state.categoryReducer.productNumber,
    cart: state.productReducer.carts,
    productUpdated: state.productReducer.productUpdated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProducts: index => dispatch(actions.addProducts(index)),
    onAddProductToCart: (
      productTitle,
      productIndex,
      productCount,
      productBrand,
      price,
      totallPrice
    ) =>
      dispatch(
        actions.addProductsFromViewPage(
          productTitle,
          productIndex,
          productCount,
          productBrand,
          price,
          totallPrice
        )
      )
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(product)
);
