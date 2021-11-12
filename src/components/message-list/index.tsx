import React from 'react';
import { useRecoilValue } from 'recoil';
import { messagesAtom } from '../../recoil';

import { Container, MessagesContainer } from './styles';

const MessageList: React.FC = () => {
  const messages = useRecoilValue(messagesAtom);
  return (
    <Container>
      {messages.map((item) => (
        <MessagesContainer key={item.id}>
          <p>{item.message}</p>
        </MessagesContainer>
      ))}
    </Container>
  );
};

export default MessageList;
