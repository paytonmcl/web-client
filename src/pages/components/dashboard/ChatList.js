import React from 'react';

import { Card } from 'semantic-ui-react';

const ChatList = (props) => {
  const { chatCards } = props;

  return chatCards.length ? (
    <Card.Group stackable itemsPerRow={4}>
      {chatCards}
    </Card.Group>
  ) : (
    <p>No chats found</p>
  );
};

export default ChatList;
