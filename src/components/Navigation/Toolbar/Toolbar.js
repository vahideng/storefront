import React from 'react';
import classes from './Toolbar.css';
import platesHeader from '../../assets/images/plates-header.jpg';

const toolbar = props => (
 
    <div className={classes.Toolbar}>
      <img
        className={classes.platesHeader}
        src={platesHeader}
        alt="header"
      />
      <div className={classes.Plate}> Plates  
      {/* should read from jason */}
      <div className={classes.Paragraph}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget </div> 
       </div>
    </div>

);

export default toolbar;
