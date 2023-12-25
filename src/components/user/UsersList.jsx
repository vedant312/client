import React, { useEffect, useState } from 'react';
import UserCard from './Card';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import { Spinner } from 'react-bootstrap';

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [isloading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await userService.retrieveAllUsers();
      console.log(res);
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
          <div class='d-flex justify-content-center'>
            <Spinner />
          </div>
        ) : (
          Object.values(users).map((user) => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                city={user.city}
                country={user.country}
              />
            );
          })
        )
      ) : (
        <h5 className='text-center text-danger'>No users found</h5>
      )}
    </Layout>
  );
};

export default UsersList;
