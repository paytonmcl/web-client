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
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
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
      <Form.Field>
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="password2"
          name="password2"
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
