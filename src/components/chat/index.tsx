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
          <Avatar imageUrl="https://pps.whatsapp.net/v/t61.24694-24/185709635_117614070407462_8428985686804165378_n.jpg?ccb=11-4&oh=9498b6dab376ea7049c767ea1aa15747&oe=6190FD76" />
          <h1>Discípulos</h1>
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
