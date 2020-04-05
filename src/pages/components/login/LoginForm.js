import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'semantic-ui-react';

import constraints from '../shared/constraints';
import '../shared/validationErrors.css';

const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    // TODO: replace with a backend request
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          ref={register(constraints.username)}
          required
        />
        {errors.username && (
          <p className="error">
            Invalid username (must be 4-20 characters long)
          </p>
        )}
      </Form.Field>
      <Form.Field>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          ref={register(constraints.password)}
          required
        />
        {errors.password && (
          <p className="error">
            Invalid password (must be at least 5 characters long)
          </p>
        )}
      </Form.Field>
      <Input type="submit" value="Log in" />
      {/* TODO: delete this when a backend becomes available */}
      {// Don't render the link while testing
      process.env.NODE_ENV === 'test' ? null : (
        <Link to="/dashboard">Go to dashboard</Link>
      )}
    </Form>
  );
};

export default LoginForm;
