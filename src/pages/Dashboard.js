import React, { useState, useEffect } from 'react';

import { Menu, Icon, Container } from 'semantic-ui-react';

import './styles/dashboard.css';
import ChatCard from './components-dashboard/ChatCard';
import ChatList from './components-dashboard/ChatList';
import MenuSidebar from './components-dashboard/MenuSidebar';

const mockData = [
  {
    id: 1,
    chatName: 'Chat 1',
    online: 12,
    members: 21,
  },
  {
    id: 2,
    chatName: 'Chat 2',
    online: 12,
    members: 21,
  },
  {
    id: 3,
    chatName: 'Chat 3',
    online: 12,
    members: 21,
  },
  {
    id: 4,
    chatName: 'Chat 4',
    online: 0,
    members: 21,
  },
  {
    id: 5,
    chatName: 'Chat 5',
    online: 12,
    members: 21,
  },
];

const Dashboard = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const json = mockData;

    setChats(
      json.map((item, idx) => {
        return (
          <ChatCard
            chatName={item.chatName}
            online={item.online}
            members={item.members}
            id={item.id}
            key={idx}
          />
        );
      })
    );

    setHasLoaded(true);
  }, []);

  if (!hasLoaded) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Menu>
        <Menu.Item
          name="hamburger"
          active={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Menu position="right">
          <h3>Chats</h3>
        </Menu.Menu>
      </Menu>
      <MenuSidebar opened={menuOpened} setOpened={setMenuOpened} />
      <Container>
        <ChatList chatCards={chats} />
      </Container>
    </>
  );
};

export default Dashboard;
