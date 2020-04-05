import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ChatList from '../ChatList';
import ChatCard from '../ChatCard';

describe('ChatList render tests', () => {
  it('should render some text when no carts are found', () => {
    const list = render(<ChatList chatCards={[]} />);
    const noCardsText = list.getByText('No chats found');

    expect(noCardsText).toBeInTheDocument();
  });

  it('should render cards when they are present', () => {
    // prepare 101 chat cards
    let cards = [];
    for (let i = 0; i <= 100; ++i) {
      cards.push(
        <ChatCard
          key={i}
          id={i}
          chatName={`Chat ${i}`}
          online={2 * i}
          members={3 * i}
        />
      );
    }
    const list = render(<ChatList chatCards={cards} />);

    for (let i = 0; i <= 100; ++i) {
      expect(list.getByText(`Chat ${i}`)).toBeInTheDocument();
    }
  });
});
