import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import RemoveUser from './RemoveUser';

const UserCard = ({ props }) => {
  return (
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
  );
};

export default UserCard;
