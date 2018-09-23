import React, { Component } from 'react';
import * as actions from './store/actions/category';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter } from 'react-router-dom';
import productDisctiption from './containers/Product/Product';
import { connect } from 'react-redux';
import products from './Json/product.json';
import CategoryListPage from './containers/CategoryListpage/CategoryListpage';
import CartPage from './containers/cartPage/CartPage';

class App extends Component {
  componentDidMount() {
    console.log(this.props, ' in apps');

    // const data = products.map(ca => {
    //   return ca;
    // });
    this.props.onReadProducts(products);
    console.log(products[0].title);
  }
  render() {
    const routes = (
      <Switch>
        
        <Route path="/" exact component={CategoryListPage} />
        <Route path="/viewcart" component={CartPage} />
        <Route path="/:id" component={productDisctiption} />
      </Switch>
    );
    return (
      <div className={classes.App}>
        <Layout className={classes.Appheader} />
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReadProducts: data => dispatch(actions.readProductSuccess(data))
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
