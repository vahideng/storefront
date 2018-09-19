import React, { Component } from 'react';
import classes from './Photo.css';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class photo extends Component {
  render() {
    return (
      
      <Col xs={12} md={4} lg={4} >
      <div className={classes.Container}>
        <img
          src={this.props.imageSource}
          alt={this.props.imageAlt}
          respnsive= 'true'
          className={classes.Image}
          
        />
        <div className={classes.Middle}>
        <button onClick={this.props.clicked} className={classes.Button}>
          VIEW DETAILS
        </button>
        <button className={classes.Button1}> ADD TO CART </button>
      
        </div>
        <div>
        <p style={{ color: 'gray' }}>{this.props.brand}</p>
        <p>{this.props.title}</p>
        <p style={{ color: 'gray' }}>${this.props.price}</p>
       
        </div>
      </div>
      
      </Col>
      
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(photo);
