import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import LoginForm from './components-login/LoginForm';

const Login = () => {
  return (
    <Container>
      <Header as="h1">Log in</Header>
      <LoginForm />
    </Container>
  );
};

export default Login;
