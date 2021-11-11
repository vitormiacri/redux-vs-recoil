import React, { useEffect, useState } from 'react';
import { addMessage, getMessages, Message } from '../../services/fake-api';
import Avatar from '../avatar';
import Form from '../form';
import MessageList from '../message-list';

import { Container, Card, Header, MessagesContainer } from './styles';

type StateProps = {
  loading: boolean;
  messageList: Message[];
};

const Chat: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    loading: true,
    messageList: [],
  });

  useEffect(() => {
    const loadMessages = async () => {
      const response = await getMessages();
      setState({
        loading: false,
        messageList: [...response],
      });
    };
    loadMessages();
  }, []);

  const handleAddMessage = async (text: string) => {
    if (text.trim().length > 0) {
      const res = await addMessage(text);
      setState((old) => ({
        ...old,
        messageList: [...res],
      }));
    }
  };

  return (
    <Container>
      <Card>
        <Header>
          <Avatar imageUrl="https://cdn.mitvstatic.com/programs/br_eu-eu-mesmo-e-irene-2000_l_m.jpg" />
          <h1>Eu, eu mesmo e Irene</h1>
        </Header>
        {state.loading ? (
          <div>Carregando...</div>
        ) : (
          <MessagesContainer>
            <MessageList list={state.messageList} />
          </MessagesContainer>
        )}
        <Form handleAddMessage={handleAddMessage} />
      </Card>
    </Container>
  );
};

export default Chat;
