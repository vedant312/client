import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const res = await userService.createUser(payload);
      if (res.data.status === 'success') {
        toast.success('User created successfully !');
        setName('');
        setEmail('');
        setCity('');
        setCountry('');
        navigate('/');
      }
    } catch (err) {
      toast.error(`${err.response.data.errors.body[0].message}`);
    }
  };

  return (
    <div>
      <Layout>
        <h3 className='text-center mt-3 mb-3'>Create new user</h3>
        <Container className='mb-5'>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    onChange={(elName) => setName(elName.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    onChange={(elEmail) => setEmail(elEmail.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='City'
                    onChange={(elCity) => setCity(elCity.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Country'
                    onChange={(elCountry) => setCountry(elCountry.target.value)}
                  />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={submitForm}>
                  Add User
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default CreateUser;
