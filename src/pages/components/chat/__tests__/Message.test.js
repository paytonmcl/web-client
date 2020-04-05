import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Message from '../Message';

describe('Message component tests', () => {
  it('should render username and message content', () => {
    const username = 'kicia',
      messageContent = 'miaumiaumiau';
    const message = render(
      <Message user={username} message={messageContent} />
    );

    message.debug();

    expect(message.getByText(username)).toBeInTheDocument();
    expect(message.getByText(messageContent)).toBeInTheDocument();
  });
});
