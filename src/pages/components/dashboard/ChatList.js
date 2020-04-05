import React from 'react';
import _ from 'lodash';

import { Card } from 'semantic-ui-react';

const ChatList = (props) => {
  const { chatCards } = props;

  return !_.isEmpty(chatCards) ? (
    <Card.Group stackable>{chatCards}</Card.Group>
  ) : (
    <p>No chats found</p>
  );
};

export default ChatList;
