import React from 'react';
import { Form, Icon, Modal } from 'semantic-ui-react';

import './styles/sidebar.css';

const NewChatModal = () => (
  <Modal
    trigger={
      <p className="sidebar-command">
        <Icon name="plus square" /> New chat
      </p>
    }
  >
    <Modal.Header>New Chat</Modal.Header>
    <Modal.Content>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group inline>
          <Form.Input
            type="text"
            id="chat-name"
            placeholder="Chat name"
            required
          />
          <Form.Input type="submit" value="Create" />
        </Form.Group>
      </Form>
    </Modal.Content>
  </Modal>
);

export default NewChatModal;
