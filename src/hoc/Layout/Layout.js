import React, { Component } from 'react';

import classes from './Layout.css';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <header>
          <nav>
            <NavigationItems className={classes.Toolbar} />
          </nav>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
