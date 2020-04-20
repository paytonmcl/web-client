import React, { useState } from 'react';

import { Container, Header } from 'semantic-ui-react';
import LoginForm from './components/login/LoginForm';

const LogOut = () => {
  localStorage.clear();

  const [setJwtPresent] = useState(
    localStorage.getItem('jwt') != null
  );
  

  return (
    <>
      <Container className="animated fadeInUp" style={{ marginTop: '5vh' }}>
      <p>You have been logged out!</p>
      <Header as="h1">Log in</Header>
      <LoginForm setJwtPresent={setJwtPresent} />
    </Container>
    </>
  );
};

export default LogOut;
