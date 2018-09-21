import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDesctiption from '../../components/ProductDescription/ProductDescription';
import image from '../../components/Images/Images';
import * as actions from '../../store/actions/category';
import AUX from '../../hoc/Aux/Aux';

class product extends Component {
  state = {
    product: [],
    counter: 0,
    myCart: null,
    popUpShow: false
  };

  componentWillMount() {
    const products = this.props.products; //loading products from redux
    const productIndex = this.props.productNumber; // fetching product index from redux
    this.setState({
      product: products,
      productIndex: productIndex
    });
  }
  componentDidMount() {
    if (this.props.cart[0]) {
      this.props.cart.map(product => {
        if (product.productIndex === this.props.productIndex) {
          this.setState({ counter: product.productCount });
          console.log(product.productCount, 'prrrrrr');
        } else {
          console.log(product.productCount, 'xxxxxaxaxaprrrrrr');
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState, nextProps, nextState) {
    if (this.props.cart !== prevProps.cart) {
      this.setState({ myCart: this.props.cart });
    }

    if (this.state.popUpShow) {
      this.setPopupOff = setTimeout(() => {
        this.setState(() => ({ popUpShow: false }));
      }, 1000);
    }
  }

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
    console.log(this.state.myCart, 'mycart');
    console.log(this.state.popUpShow, 'popUpShow');
    let isProductAvailable = 'product is not loaded';
    if (this.props.product[this.props.productIndex]) {
      isProductAvailable = (
        <ProductDesctiption
          title={this.props.product[this.props.productIndex].title}
          description={this.props.product[this.props.productIndex].description}
          imageSource={image[this.props.productIndex]}
          brand={this.props.product[this.props.productIndex].brand}
          price={this.props.product[this.props.productIndex].price}
          add={() =>
            this.addProductToRedux(
              this.props.product[this.props.productIndex].title,
              this.props.productIndex,
              this.props.product[this.props.productIndex].price,
              this.props.product[this.props.productIndex].brand
            )
          }
          increaseCount={this.increaserProductPayload}
          count={this.state.counter}
          decreaseCount={this.decreaseProductPayload}
          productCount={() =>
            this.setProductCountFromRedux(
              this.props.product[this.props.productIndex].title,
              this.props.productIndex
            )
          }
        />
      );
    }
    return (
      <AUX>
        <div style={{ marginTop: '10%' }}>{isProductAvailable}</div>
       
         
          {this.state.popUpShow ?  <div
          style={{
            textAlign:'center',
            transition: '0.5s ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
           paddingTop:'40px',
            width: '200px',
            backgroundColor: 'gray',
            color: 'white',
            height: '90px'
          }} >
         Product added to cart 
          </div> : null}
       
      </AUX>
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.categoryReducer.product,
    productIndex: state.categoryReducer.productNumber,
    cart: state.productReducer.carts
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
