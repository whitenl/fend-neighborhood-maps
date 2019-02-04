import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';


class SideBar extends Component {

  
  render () {
    return (
      <Menu className="Side-bar">
      <h3>Coffee spots</h3>
      <p>i'm the SIDEBAR</p>
      </Menu>
    );
  }
}

export default SideBar


       