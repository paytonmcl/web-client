import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Icon, Menu, Feed } from 'semantic-ui-react';

import Message from './components/chat/Message';
import DimSpinner from './components/shared/DimSpinner';

const mockChat = [
  {
    user: 'bartek',
    message: 'Hello world!',
  },
  {
    user: 'jakiś stefan',
    message: 'Hello Moon!',
  },
  {
    user: 'cyceron',
    message: `

Deserunt aliquid voluptas officia quas dolor et a odit. A occaecati commodi quisquam minima accusantium voluptatibus dolorem. Quaerat hic et beatae provident et quo expedita ullam.

Incidunt pariatur ad odio fuga vero. Molestias quidem mollitia ullam. Dolor in ad cum omnis culpa. Vel perspiciatis neque vel non.

Maxime magni enim autem ab et. Ipsa incidunt culpa doloremque amet vitae voluptatem. Et voluptas maiores quisquam dolores harum mollitia rerum. Vero non eos est dignissimos. Saepe eum omnis fugiat expedita dolorem aut ea aliquid. Magnam ut neque itaque aut sint.

Qui error ratione id iure. Et non ex odio. Enim quae beatae eaque voluptatum vel.

Aut et numquam dolores porro ipsa assumenda aspernatur. Laudantium explicabo iure cumque. Modi necessitatibus illo veniam. Et maxime omnis consequuntur in et vero veritatis nisi. Quae ea optio possimus suscipit ut consequatur. Saepe eius atque sit alias et consequuntur vero quo.
`,
  },
];

const Chat = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const isTesting = process.env.NODE_ENV === 'test';

  useEffect(() => {
    // fetch data
    const json = mockChat;

    setEvents(
      json.map((msg) => {
        return <Message user={msg.user} message={msg.message} />;
      })
    );

    setHasLoaded(true);
  }, []);

  if (!hasLoaded) {
    return <DimSpinner />;
  }

  return (
    <>
      <Menu>
        <Menu.Item as={isTesting ? null : Link} name="back" to="/dashboard">
          <Icon name="arrow left" />
        </Menu.Item>
        <Menu.Menu position="right">
          <h3>{id}</h3>
        </Menu.Menu>
      </Menu>
      <Container className="animated fadeIn fast">
        <Feed>{events}</Feed>
      </Container>
    </>
  );
};

export default Chat;
