import React from 'react';
import { Container } from 'react-bootstrap';
import Navigationbar from './Navigationbar';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Navigationbar />
      {children}
    </Container>
  );
};

export default Layout;
