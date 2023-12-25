import React from 'react';
import { CDBModalFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <CDBModalFooter>
      <CDBBox display='flex' flex='column' className='mx-auto py-5'>
        <CDBBox
          display='flex'
          justifyContent='center'
          style={{ width: '100%' }}
          className='mx-auto mt-4'
        >
          <CDBBtn flat color='dark' className='p-2'>
            <CDBIcon fab icon='linkedin' />
          </CDBBtn>
          <CDBBtn flat color='dark' className='mx-3 p-2'>
            <CDBIcon fab icon='github' />
          </CDBBtn>
          <CDBBtn flat color='dark' className='p-2'>
            <CDBIcon fab icon='instagram' />
          </CDBBtn>
        </CDBBox>
        <small className='text-center mt-5'>&copy; Vedant Dangi, 2023.</small>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;
