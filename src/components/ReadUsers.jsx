import React, { useEffect, useState } from 'react';
import UserCard from './Card';
import axios from 'axios';

const UsersList = () => {
  const getAllUsersUrl = 'http://localhost:4000/v1/user/all';
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    const res = await axios.get(`${getAllUsersUrl}`);

    console.log(res.data.data);

    setUsers(res.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3 className='text-center mt-3 mb-3'>Users</h3>
      {Object.values(users).map((user) => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.city}
            country={user.country}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
