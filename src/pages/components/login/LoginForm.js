import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'semantic-ui-react';

import constraints from '../shared/constraints';
import '../shared/validationErrors.css';

const LoginForm = ({ setJwtPresent }) => {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);

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
    switch (res.status) {
      case 500:
        setError('An internal server error has occurred! Try again later.');
        break;
      case 422:
      case 401:
        setError('Invalid credentials. Try again.');
        break;
      case 200:
        const json = await res.json();
        const token = json.token;
        if (token) {
          localStorage.setItem('jwt', token);
          setJwtPresent(true);
          return;
        } else {
          setError('No token received!');
        }
        break;
      default:
        setError(`An unknown error has occurred. Code: ${res.status}`);
    }
  };

  return (
    <Form action="#" onSubmit={handleSubmit(onSubmit)}>
      {error ? <p className="error">{error}</p> : null}
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
    </Form>
  );
};

export default LoginForm;
