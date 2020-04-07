import React from 'react';

import { Form } from 'semantic-ui-react';

const MessageInput = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Input width={11} placeholder="Type in something..." />
        <Form.Input type="submit" value="Send" />
      </Form.Group>
    </Form>
  );
};

export default MessageInput;
