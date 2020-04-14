import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'semantic-ui-react';

import constraints from '../shared/constraints';
import '../shared/validationErrors.css';

const LoginForm = ({ setJwtPresent }) => {
  const { handleSubmit, register, errors } = useForm();
  const [invalidCreds, setInvalidCreds] = useState(false);

  const onSubmit = async (data) => {
    const res = await fetch('/backend/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    const json = await res.json();
    const token = json['token'];

    if (token) {
      localStorage.setItem('jwt', token);
      setJwtPresent(true);
    } else {
      setInvalidCreds(true);
    }
  };

  return (
    <Form action="#" onSubmit={handleSubmit(onSubmit)}>
      {invalidCreds ? (
        <p className="error">Invalid credentials. Please try again.</p>
      ) : null}
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
            Invalid username (must be 3-20 characters long)
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
            Invalid password (must be at least 8 characters long)
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
