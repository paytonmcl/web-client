import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSuccessful = () => {
  return (
    <>
      <p>You have been successfully registered!</p>
      <Link to="/login">Click here to login.</Link>
    </>
  );
};

export default RegisterSuccessful;
