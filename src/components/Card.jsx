import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const UserCard = (props) => {
  return (
    <Container className='mt-3 mb-3'>
      <Row className='justify-content-md-center'>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4>{props.name}</h4>
              <p>{props.email}</p>
              {props.city && props.country && (
                <p>
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
