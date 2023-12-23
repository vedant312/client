import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navigationbar from './Navigationbar';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Navigationbar />
      <ToastContainer />
      {children}
    </Container>
  );
};

export default Layout;
