import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon, Container } from 'semantic-ui-react';

import './styles/dashboard.css';
import ChatCard from './components/dashboard/ChatCard';
import ChatList from './components/dashboard/ChatList';
import MenuSidebar from './components/dashboard/MenuSidebar';
import DimSpinner from './components/shared/DimSpinner';
import ChatSearch from './components/dashboard/ChatSearch';

const Dashboard = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [chats, setChats] = useState([]);
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    // TODO: Replace with actual fetch code
    let mockData = [];
    for (let i = 0; i <= 100; ++i) {
      mockData.push({
        id: i,
        chatName: `Chat ${i}`,
        online: 2 * i,
        members: 3 * i,
      });
    }

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
    return <DimSpinner />;
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
          <Menu.Item><h3>Chats</h3></Menu.Item>
          <Menu.Item>
            <Link to="/logout">
            <h3 style={{ color: 'red' }}>Log Out</h3>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <MenuSidebar opened={menuOpened} setOpened={setMenuOpened} />
      <Container className="animated fadeIn">
        <ChatSearch searchedName={searchedName} setSearchedName={setSearchedName} />
        {/*
            if searchedName is truthy, render chats whose names
            include searchedName, otherwise return all chats
          */}
        {searchedName ? (
          <ChatList
            chatCards={chats.filter((chat) => {
              return chat.props.chatName
                .toLowerCase()
                .match(searchedName.toLowerCase());
            })}
          />
        ) : (
          <ChatList chatCards={chats} />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
