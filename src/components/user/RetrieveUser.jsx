import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from './Card';
import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import { Spinner } from 'react-bootstrap';

const RetriveUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isloading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const res = await userService.retriveUser(id);

      setUser(res.data.data);
      setIsLoading(false);
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
          isloading ? (
            <div class='d-flex justify-content-center'>
              <Spinner />
            </div>
          ) : (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              city={user.city}
              country={user.country}
            />
          )
        ) : (
          <h5 className='text-center text-danger'>User not found</h5>
        )}
      </Layout>
    </div>
  );
};

export default RetriveUser;
