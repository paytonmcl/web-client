import React from 'react';

import { Card } from 'semantic-ui-react';

const ChatList = (props) => {
  const { chatCards } = props;

  return <Card.Group stackable>{chatCards}</Card.Group>;
};

export default ChatList;
