import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MdOutlineDeleteForever } from 'react-icons/md';
import * as userService from '../../services/user.service';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const RemoveUser = (props) => {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    try {
      const res = await userService.removeUser(props.id);
      if (res.data?.status === 'success') {
        toast.success(`User ${props.id} successfully removed!`);
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        toast.warn(`User ${props.id} can not be removed!`);
      }
    } catch (err) {
      toast.error(`${err.response.data.errors.body[0].message}`);
    }
  };

  const submitForm = () => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure you want to remove user',
      buttons: [
        {
          label: 'Yes',
          onClick: handleDelete,
        },
        {
          label: 'No',
        },
      ],
    });
  };
  return (
    <Button
      style={{ float: 'right' }}
      variant='light'
      size='sm'
      onClick={submitForm}
      label='Confirm'
    >
      <MdOutlineDeleteForever size={20} color='red' />
    </Button>
  );
};

export default RemoveUser;
