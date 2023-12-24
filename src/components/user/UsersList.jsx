import React, { useEffect, useState } from 'react';
import UserCard from './Card';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';

const UsersList = () => {
  const getAllUsersEndpoint = 'http://localhost:4000/v1/user/all';
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    try {
      const res = await userService.retrieveAllUsers();
      console.log(res);
      setUsers(res.data.data);
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
        Object.values(users).map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              city={user.city}
              country={user.country}
            />
          );
        })
      ) : (
        <h5 className='text-center text-danger'>No users found</h5>
      )}
    </Layout>
  );
};

export default UsersList;
