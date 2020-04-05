import React from 'react';

import { Feed } from 'semantic-ui-react';

const Message = (props) => {
  const { user, message } = props;

  return (
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{user}</Feed.User>
        </Feed.Summary>
        <Feed.Extra>{message}</Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  );
};

export default Message;
