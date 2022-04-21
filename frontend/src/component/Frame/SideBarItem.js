import React, { Component } from 'react';

import Radium, { Plugins, StyleRoot } from 'radium';
import styles from './Sidestyles';
import PropTypes from 'prop-types';
import Route from './Route';
import Route02 from './Route02';


class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(!this.state.open);
    this.setState({ open: !this.state.open });
  }
  
  render() {
    const { title, icon, route, theme, children } = this.props;
    const { open } = this.state;
    if (route) {
      return (
        <div>
          <StyleRoot>
            <Route route={route} icon={icon} title={title} children={children} ></Route>
          </StyleRoot>
        </div>
      );
    } else {
      return (
        <div>
          <StyleRoot>
           <Route02 icon={icon} title={title} handleClick={this.handleClick} children={children}/>
          </StyleRoot>
          { open &&
            (<div style={[ styles.nested, styles[theme] ]}>{ children }</div>
          )}
        </div>
      );
    }
  }
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  route: PropTypes.string
};


function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Plugins.checkProps,
      Plugins.mergeStyleArray,
      Plugins.resolveInteractionStyles,
      Plugins.resolveMediaQueries,
      Plugins.prefix,
      Plugins.visited
    ]
  })(component);
}

SideBarItem = ConfiguredRadium(SideBarItem);
export default SideBarItem;
