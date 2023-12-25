import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import UserCard from './Card';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import { Spinner } from 'react-bootstrap';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await userService.retrieveAllUsers();
      setUsers(res.data.data);
      setIsLoading(false);
    } catch (err) {
      setUsers(null);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <h3 className='text-center mt-3 mb-3'>Users</h3>
      {users ? (
        isloading ? (
          <div className='d-flex justify-content-center'>
            <Spinner />
          </div>
        ) : (
          <Row className='justify-content-center'>
            {users.map((user) => (
              <Col key={user.id} lg={4} className='p-3'>
                <UserCard props={user} />
              </Col>
            ))}
          </Row>
        )
      ) : (
        <h5 className='text-center text-danger'>No users found</h5>
      )}
    </Layout>
  );
};

export default UsersList;
