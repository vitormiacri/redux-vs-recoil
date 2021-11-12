import React from 'react';
import { useSelector } from 'react-redux';

import { MessageState } from '../../store/types';

import { Container, MessagesContainer } from './styles';

const MessageList: React.FC = () => {
  const messagesList = useSelector((state: MessageState) => state.messages);
  return (
    <MessagesContainer>
      {messagesList?.map((item) => (
        <Container key={item.id}>
          <p>{item.message}</p>
        </Container>
      ))}
    </MessagesContainer>
  );
};

export default MessageList;
