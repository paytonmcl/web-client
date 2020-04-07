import React, { useState } from 'react';

import { Form } from 'semantic-ui-react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    if (!message) {
      return;
    }

    e.preventDefault();
    setMessage('');

    // TODO: replace with socket.emit()
    console.log(message);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          width={11}
          placeholder="Type in something..."
        />
        <Form.Input type="submit" value="Send" />
      </Form.Group>
    </Form>
  );
};

export default MessageInput;
