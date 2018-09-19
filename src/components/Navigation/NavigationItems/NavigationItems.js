import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { Navbar, Nav, MenuItem, NavDropdown, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux';
import image from '../../Images/Images';
import classes from './NavigationItems.css';
import CustomButton from '../../../UI/Button/Button';
import * as actions from '../../../store/actions/category';
import BasketItem from '../../BasketItem/BasketItem';
import { withRouter } from 'react-router-dom';

class NavigationItems extends Component {
  state = {
    myCart: null,
    totalPrice: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cart !== prevProps.cart) {
      this.calculateTotalPrice();
      this.setState({ myCart: this.props.cart });
    }
  }
  calculateTotalPrice() {
    let totalPrice = 0;
    this.props.cart.map(pro => {
      return (totalPrice += pro.totalPrice);
    });
    this.setState({ totalPrice: totalPrice });
    console.log(totalPrice, 'totalproceeee');
  }
  removeProduct(index) {
    console.log(index, 'INDEXXXXXX');
    this.props.onRemoveProduct(index);
  }

  viewCartPage = () => {
this.props.history.push('/viewcart');
    
    
  }

  render() {
    console.log(this.props,"this props");
    
    let myCartInfo = <MenuItem> Empty </MenuItem>;
    if (this.state.myCart) {
      myCartInfo = this.state.myCart.map((cart, index) => {
        return (
          <Row
            key={index}
            eventkey={index}
            id={index}
            className={classes.Basket_Item_Row}
          >
            <BasketItem
              imageSource={image[cart.productIndex]}
              productTitle={cart.productTitle}
               productCount={cart.productCount}
               sign={'X'}
              productBrand={cart.productBrand}
              dollarSign={'$'}
              productPrice={cart.productPrice}
            />
            <Col
              style={{
                float: 'right',
                marginRight: '12px',
                color: 'gray',
                fontWeight: 'bold'
              }}
            >
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => this.removeProduct(cart.productIndex)}
              >
                {' '}
                X
              </div>
            </Col>
          </Row>
        );
      });
    }

    return (
      <Navbar
        style={{
          background: 'white',
          border: '1px solid transparent',
          color: 'black'
        }}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            style={{
              float: 'none',
              display: 'inline-block',
              fontWeight: '600',
              margin: '10px'
            }}
          >
            <NavigationItem key={1} link="./">
              HOME
            </NavigationItem>
            <NavigationItem key={2} link="./shope">
              SHOPE
            </NavigationItem>
            <NavigationItem key={3} link="./journal">
              JOURNAL
            </NavigationItem>
            <NavDropdown eventKey={4} title="MORE" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Meysam Kiri</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight style={{ fontWeight: '600' }}>
            <NavDropdown eventKey={6} title="MY CART" id={6.1}>
              <Row className={classes.Basket_Container}>
                {myCartInfo}
                <hr />
                <Col>
                  <span style={{ marginLeft: '24px', color: 'gray' }}>
                
                    Total Price
                  </span>
                  <span
                    style={{
                      float: 'right',
                      marginRight: '24px',
                      color: 'gray'
                    }}
                  >
                    ${this.state.totalPrice}
                  </span>
                </Col>

                <Row style={{ marginTop: '10px', marginBottom: '12px' }}>
                  <Col xs={6} style={{ fontSize: '1.6rem' }}>
                    <CustomButton
                      clicked={this.viewCartPage}
                      btnType="ViewCart"
                      inside="VIEW CART"
                    />
                  </Col>
                  <Col xs={6} style={{ fontSize: '1.6rem' }}>
                    <CustomButton btnType="Checkout" inside="CHECKOUT" />
                  </Col>
                </Row>
              </Row>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
    onRemoveProduct: index => dispatch(actions.removeProduct(index))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationItems)
);
