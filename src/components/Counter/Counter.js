import React from 'react';
import classes from './Counter.css';
const counter = props => (
 <div className={[classes.Counter, classes[props.btnType]].join(' ')}>

    <span className={classes.Amount}> {props.count} </span>
    <div className={classes.BtnWrapper}>
      <span className={classes.CounterBtn} onClick={props.increaseCount}>
        +
      </span>
      <span className={classes.CounterBtn} onClick={props.decreaseCount}>
        -
      </span>
    </div>
  </div>
);

export default counter;
