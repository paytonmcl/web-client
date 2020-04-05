import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ChatCard from '../ChatCard';

describe('Chat card display tests', () => {
  it('should display a red icon when no users are online', () => {
    const card = render(<ChatCard online={0} />);
    const icon = card.getByTestId('onlineIcon');

    expect(icon).toHaveStyle('color: red;');
  });

  it('should display a teal icon when there are online users', () => {
    const card = render(<ChatCard online={42} />);
    const icon = card.getByTestId('onlineIcon');

    expect(icon).toHaveStyle('color: teal;');
  });
});
