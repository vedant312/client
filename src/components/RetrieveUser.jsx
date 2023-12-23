import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from './Card';
import axios from 'axios';
import Layout from './Layout';

const RetriveUser = () => {
  const { id } = useParams();
  const getUserUrl = `http://localhost:4000/v1/user/${id}`;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${getUserUrl}`);

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
