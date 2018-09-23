import React,{Component} from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import classes from './ProductDescription.css';
import Counter from '../Counter/Counter';
import {withRouter} from 'react-router-dom';

class productDescription extends Component {
  componentDidMount (){
    console.log(this.props,"this props om photo");
  }
  render() {

return(<Row className="show-grid">
<Col xs={12} md={6} lg={6}>
  <img
    src={this.props.imageSource}
    responsive="true"
    alt="sdds"
    style={{ width: '480px', maxWidth: '100%' }}
  />
</Col>

<Col xs={12} md={6} lg={6} style={{ fontSize: '1.6rem' }}>
  <p style={{ color: 'gray' }}> {this.props.brand} </p>
  <p style={{ fontWeight: 'bolder' }}>{this.props.title}</p>
  <p style={{ color: 'gray' }}>${this.props.price}</p>
  <p> {this.props.description} </p>
  <hr />
  
    <Row>
      <Col xs={6} style={{ fontSize: '1.6rem' }}>
        <Counter
          count={this.props.count}
          increaseCount={this.props.increaseCount}
          decreaseCount={this.props.decreaseCount}
        />
      </Col>
      <Col xs={6} style={{ fontSize: '1.6rem'}}>
        <Button className={classes.Button} onClick={this.props.add} style={{ float: 'left' }}>
          ADD TO CART
        </Button>
      </Col>
    </Row>
 
</Col>
</Row>);

  }

}




export default withRouter(productDescription) ;
