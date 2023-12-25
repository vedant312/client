import React from 'react';
import { Container } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Container fluid={true}>
      <Navigationbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
