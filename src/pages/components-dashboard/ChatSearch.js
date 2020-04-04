import React, { useState } from 'react';

import { Form } from 'semantic-ui-react';

const ChatSearch = ({ setSearchedName }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setSearchedName(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          placeholder="Start typing to search chats..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Form.Input type="submit" value="Search" />
      </Form.Group>
    </Form>
  );
};

export default ChatSearch;
