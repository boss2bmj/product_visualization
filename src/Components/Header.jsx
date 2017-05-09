import React from 'react';
import {Col, Button, Icon, Navbar, NavItem, Footer, Row} from 'react-materialize';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='logo' right className='blue'>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}
