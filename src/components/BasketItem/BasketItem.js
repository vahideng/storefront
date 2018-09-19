
import React from 'react';
import {Col} from 'react-bootstrap';
import Aux from '../../hoc/Aux/Aux';
import classes from './BasketItem.css'

const basketItem = props =>(
<Aux>
    <Col xs={4} className={classes.Basket_Img_Container}>
    <img
      src={props.imageSource}
      alt=""
      className={classes.thumbnail}
    />
  </Col>
  <Col xs={6} className={classes.Basket_Info_Container}>
    <div className={classes.title}>{props.productTitle}</div>

    <div style={{ verticalAlign: 'middle', fontSize: 'xx-small' }}>
      {props.sign}{props.productCount}
    </div>
    
    <div> { props.productBrand} </div>
   
    <div style={{ verticalAlign: 'middle' }}>
      {props.dollarSign} {props.productPrice}
    </div>
  </Col>
  </Aux>

)

export default basketItem