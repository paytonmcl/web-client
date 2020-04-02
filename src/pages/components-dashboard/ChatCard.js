import React from 'react';

import { Card, Icon } from 'semantic-ui-react';

const ChatCard = (props) => {
  const { chatName, online, members } = props;
  const onlineIconStyle = {
    color: online ? 'teal' : 'red',
  };

  return (
    <Card>
      <Card.Content header={chatName} />
      <Card.Content extra>
        <Icon name="dot circle" style={onlineIconStyle} /> {online} online
        <br />
        <Icon name="dot circle" /> {members} members
        <br />
      </Card.Content>
    </Card>
  );
};

export default ChatCard;
