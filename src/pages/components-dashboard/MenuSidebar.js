import React from 'react';

import { Sidebar, Menu } from 'semantic-ui-react';

const MenuSidebar = (props) => {
  const { opened, setOpened } = props;

  return (
    <Sidebar
      as={Menu}
      visible={opened}
      vertical
      direction="bottom"
      onHide={() => setOpened(false)}
      animation="push"
    >
      <Menu.Item>Lorem ipsum dolor sit amet</Menu.Item>
      <Menu.Item>Lorem ipsum dolor sit amet</Menu.Item>
      <Menu.Item>Lorem ipsum dolor sit amet</Menu.Item>
      <Menu.Item>Lorem ipsum dolor sit amet</Menu.Item>
      <Menu.Item>Lorem ipsum dolor sit amet</Menu.Item>
    </Sidebar>
  );
};

export default MenuSidebar;
