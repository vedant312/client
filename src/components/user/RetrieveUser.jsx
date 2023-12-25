import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from './Card';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';

const RetriveUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const res = await userService.retriveUser(id);

      setUser(res.data.data);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <div>
      <Layout>
        <h3 className='text-center mt-3 mb-3'>Requested User</h3>
        {user ? (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            city={user.city}
            country={user.country}
          />
        ) : (
          <h5 className='text-center text-danger'>User not found</h5>
        )}
      </Layout>
    </div>
  );
};

export default RetriveUser;
