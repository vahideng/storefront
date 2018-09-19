import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import classes from './NavigationItem.css';
import './NavigationItem.css';
import {
  Nav,
  NavItem
} from 'react-bootstrap';

const navigationItem = props => (
  <Nav className={classes.Nav}>
    <LinkContainer to={props.link}>
      <NavItem eventKey={props.key}>{props.children}</NavItem>
    </LinkContainer>
  </Nav>
);

export default navigationItem;
