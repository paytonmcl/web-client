import React from 'react';

import { Container } from 'semantic-ui-react';

import RegisterForm from './components/register/RegisterForm';

const Register = () => {
  return (
    <Container className="animated fadeInUp" style={{ marginTop: '5vh' }}>
      <h1>Register</h1>
      <RegisterForm />
    </Container>
  );
};

export default Register;
