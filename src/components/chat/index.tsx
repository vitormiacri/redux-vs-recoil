import React, { Suspense } from 'react';

import Header from '../header';
import Form from '../form';
import MessageList from '../message-list';

import { Container, Card } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Card>
        <Suspense fallback="Carregando...">
          <Header />
          <MessageList />
          <Form />
        </Suspense>
      </Card>
    </Container>
  );
};

export default Chat;
