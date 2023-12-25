import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user.service';
import { toast } from 'react-toastify';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import Layout from '../layout/Layout';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const getUser = async () => {
    try {
      const res = await userService.retriveUser(id);
      setName(res.data.data.name);
      setEmail(res.data.data.email);
      setCity(res.data.data.city);
      setCountry(res.data.data.country);
    } catch (err) {
      toast.error(`User ${id} not found!`);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const res = await userService.editUser(id, payload);
      if (res.data?.status === 'success') {
        toast.success(`User ${id} successfully updated!`);
        setName('');
        setEmail('');
        setCity('');
        setCountry('');
        navigate('/');
      } else {
        toast.warn(`User ${id} can not be updated!`);
      }
    } catch (err) {
      toast.error(`${err.response.data.errors.body[0].message}`);
    }
  };

  return (
    <div>
      <Layout>
        <h3 className='text-center mt-3 mb-3'>Edit user</h3>
        <Container className='mb-5'>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    value={name}
                    placeholder='Name'
                    onChange={(elName) => setName(elName.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(elEmail) => setEmail(elEmail.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={(elCity) => setCity(elCity.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Country'
                    value={country}
                    onChange={(elCountry) => setCountry(elCountry.target.value)}
                  />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={submitForm}>
                  Update
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default EditUser;
