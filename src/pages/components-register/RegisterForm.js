import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input type="text" placeholder="Username" name="username" required />
      </Form.Field>
      <Form.Field>
        <label>E-mail</label>
        <input type="email" placeholder="Email" name="username" required />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
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
