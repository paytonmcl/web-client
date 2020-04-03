import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { id } = useParams();

  return <p>You are in the chat with ID {id}</p>;
};

export default Chat;
