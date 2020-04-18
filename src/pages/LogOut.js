import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = () => {
  localStorage.clear();

  return (
    <>
      <p>You have been logged out!</p>
      <Link to="/login">
        <p>Click here to log in again.</p>
      </Link>
    </>
  );
};

export default LogOut;
