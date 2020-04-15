import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import RegisterForm from './components/register/RegisterForm';

const Register = () => {
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return <Redirect to="/register-successful" />;
  }

  return (
    <Container className="animated fadeInUp" style={{ marginTop: '5vh' }}>
      <h1>Register</h1>
      <RegisterForm setRegistered={setRegistered} />
    </Container>
  );
};

export default Register;
