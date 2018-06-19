import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

class CollapsingSidebar extends Component {
  render() {
    return (
      <Menu className="bm-menu" isOpen={false}>
        <NavLink className="Links" exact to="/" activeClassName="Links-Active">Home</NavLink>
        <NavLink className="Links" to="/about" activeClassName="Links-Active">About</NavLink>
        <NavLink className="Links" to="/contact" activeClassName="Links-Active">Contact</NavLink>
        <NavLink className="Links" to="/portfolio" activeClassName="Links-Active">My Work</NavLink>
        <NavLink className="Links" to="/requests" activeClassName="Links-Active">Requests</NavLink>
      </Menu>
    );
  }
};

export default CollapsingSidebar;