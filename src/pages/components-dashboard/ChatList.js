import React from 'react';

import { Grid } from 'semantic-ui-react';

const ChatList = (props) => {
  const { chatCards } = props;
  return (
    <Grid container stackable>
      {chatCards.map((card) => (
        <Grid item>{card}</Grid>
      ))}
    </Grid>
  );
};

export default ChatList;
