import React from 'react';
import {Col, Button, Icon, Navbar, NavItem, Footer, Row} from 'react-materialize';
import Header from "Header";
import Footer from "Footer";
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row className='center'>
          <Col m={10} className='grid-example' offset='s'><Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button></Col>

        </Row>
        <Col s={1} className='grid-example'><Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button></Col>
        <Footer />



      </div>
    );
  }
}
