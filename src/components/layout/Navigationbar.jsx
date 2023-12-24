import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Nav,
  Container,
  Navbar,
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ id: searchValue });
    navigate(`/${searchValue}`);
  };

  return (
    <Navbar sticky='top' bg='light' variant='light'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          API App
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/create'>
            Create User
          </Nav.Link>
        </Nav>
        <Form inline="true" onSubmit={handleSearch}>
          <Row>
            <Col xs='auto'>
              <Form.Control
                type='number'
                placeholder='Search User'
                className=' mr-sm-2'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Col>
            <Col xs='auto'>
              <Button type='submit'>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
