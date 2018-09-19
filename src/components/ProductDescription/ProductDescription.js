import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import classes from './ProductDescription.css';
import Counter from '../Counter/Counter';
const productDescription = props => (
  <Row className="show-grid">
    <Col xs={12} md={6} lg={6}>
      <img
        src={props.imageSource}
        responsive="true"
        alt="sdds"
        style={{ width: '480px', maxWidth: '100%' }}
      />
    </Col>

    <Col xs={12} md={6} lg={6} style={{ fontSize: '1.6rem' }}>
      <p style={{ color: 'gray' }}> {props.brand} </p>
      <p style={{ fontWeight: 'bolder' }}>{props.title}</p>
      <p style={{ color: 'gray' }}>${props.price}</p>
      <p> {props.description} </p>
      <hr />
      
        <Row>
          <Col xs={6} style={{ fontSize: '1.6rem' }}>
            <Counter
              count={props.count}
              increaseCount={props.increaseCount}
              decreaseCount={props.decreaseCount}
            />
          </Col>
          <Col xs={6} style={{ fontSize: '1.6rem'}}>
            <Button className={classes.Button} onClick={props.add} style={{ float: 'left' }}>
              ADD TO CART
            </Button>
          </Col>
        </Row>
     
    </Col>
  </Row>
);

export default productDescription;
