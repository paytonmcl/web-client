import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Icon, Button } from 'semantic-ui-react';

const ChatCard = (props) => {
  const { chatName, online, members, id } = props;
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
        <Link to={`/chat/${id}`}>
          <Button style={{ float: 'right' }}>Join</Button>
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ChatCard;
