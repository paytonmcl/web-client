import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import LoginForm from './components/login/LoginForm';

const Login = () => {
  // we have to use state
  // so that the page is refreshed
  // when a JWT is loaded
  const [jwtPresent, setJwtPresent] = useState(
    localStorage.getItem('jwt') != null
  );

  if (jwtPresent) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className="animated fadeInUp" style={{ marginTop: '5vh' }}>
      <Header as="h1">Log in</Header>
      <LoginForm setJwtPresent={setJwtPresent} />
    </Container>
  );
};

export default Login;
