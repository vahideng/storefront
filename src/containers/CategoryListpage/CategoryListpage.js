import React, { Component } from 'react';
import images from '../../components/Images/Images';
import { connect } from 'react-redux';
import Photo from '../../UI/Photos/Photo';
import * as actions from '../../store/actions/category';
import { withRouter,Link,Redirect } from 'react-router-dom';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { Row, Grid } from 'react-bootstrap';

class CategoryListpage extends Component {
  state = {
    viewDetailClicked: false,
    productIndex: null
  };

  componentWillUpdate() {
    console.log(this.props);
  
  }

  viewDetails = index => {
    this.setState({ viewDetailClicked: true, productIndex:index });
    
  
    

   
    
 this.props.onProductNumber(index);
  };

  render() {
    const products = this.props.products;
    const productCategory = products.map((product, index) => {
      console.log(product,"product in category");
      
      return (
       
        <Photo 
          key={index}
          title={product.title}
          brand={product.brand}
          price={product.price}
          description={product.description}
          imageSource={images[index]}
          imageAlt={product.title}
          clicked={()=>this.viewDetails(index)}
          
        />
     
      );
    });

    return (
      <div>
        <Toolbar />
        <Grid>
          <Row> {productCategory} </Row>
           {this.state.viewDetailClicked ? <Redirect to={'./'+this.state.productIndex}/> : null}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.categoryReducer.product,
    myCart: state.productReducer.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductNumber: number => dispatch(actions.productNumber(number))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoryListpage)
);
