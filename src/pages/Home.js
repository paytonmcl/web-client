import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Header, Grid } from 'semantic-ui-react';
import './styles/home.css';
const Home = () => {
  return (
    <Container className="container">
      <Header as="h1">korero</Header>
      <Header.Subheader as="p">
        A simple, open-source chat application.
      </Header.Subheader>

      <Grid columns={2} stackable>
        <Grid.Column>
          <Link to="/register">
            <Button primary size="big">
              Register
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/login">
            <Button secondary size="big">
              Log in
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Home;
