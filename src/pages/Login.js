import React from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import LoginForm from './components/login/LoginForm';

const Login = () => {
  if (localStorage.getItem('jwt')) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className="animated fadeInUp" style={{ marginTop: '5vh' }}>
      <Header as="h1">Log in</Header>
      <LoginForm />
    </Container>
  );
};

export default Login;
