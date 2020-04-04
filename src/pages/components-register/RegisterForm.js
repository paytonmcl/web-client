import React from 'react';
//import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'semantic-ui-react';

import constraints from './constraints';
import './errors.css';

const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
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
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          ref={register(constraints.email)}
          required
        />
        {errors.email && <p className="error">Email is required</p>}
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
      <Form.Field>
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="password2"
          name="password2"
          ref={register(constraints.password)}
          required
        />
        {errors.password2 && (
          <p className="error">
            Invalid password (must be at least 5 characters long)
          </p>
        )}
      </Form.Field>
      {/* TODO: replace Link with a submit handler */}

      <Input type="submit" value="Submit" />
    </Form>
  );
};

export default LoginForm;
