import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Header, Grid } from 'semantic-ui-react';

const Home = () => {
  const styles = {
    container: {
      textAlign: 'center',
      align: 'auto',
      fontSize: '32pt',
    },
    h1: {
      marginTop: '2rem'
    }

  };

  return (
    <Container style={styles.container}>

      <Header as='h1' style={styles.h1}>korero</Header>
      <Header.Subheader as='p'>A simple, open-source chat application.</Header.Subheader>

      <Grid columns={2} stackable>
        <Grid.Column>
          <Link to='/register'>
            <Button primary size='big'>Register</Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to='/login'>
            <Button secondary>Log in</Button>
          </Link>
        </Grid.Column>
      </Grid>

    </Container>
  );
};

export default Home;
