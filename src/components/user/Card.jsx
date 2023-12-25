import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import * as userService from '../../services/user.service';
import { toast } from 'react-toastify';
import RemoveUser from './RemoveUser';

const UserCard = (props) => {
  return (
    <Container className='mt-3 mb-3'>
      <Row className='justify-content-md-center'>
        <Col lg={5}>
          <Card>
            <Card.Body className='text-center'>
              <h4 style={{ display: 'inline-block', marginRight: '-25px' }}>
                {props.name}
              </h4>
              <Button
                style={{ float: 'right' }}
                variant='light'
                as={NavLink}
                to={`/edit/${props.id}`}
                size='sm'
              >
                <FaPencilAlt size={18} color='blue' />
              </Button>
              <p>{props.email}</p>
              <RemoveUser id={props.id} />
              {props.city && props.country && (
                <p style={{ display: 'inline-block', marginRight: '-25px' }}>
                  {props.city} - {props.country}
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
