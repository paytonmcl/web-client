import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          required
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
      </Form.Field>
      {/* TODO: replace Link with a submit handler */}
      <Link to="/dashboard">
        <Button type="submit">Submit</Button>
      </Link>
    </Form>
  );
};

export default LoginForm;
