import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../store/actions';
import { MessageState } from '../../store/types';
import Avatar from '../avatar';
import Form from '../form';
import MessageList from '../message-list';

import { Container, Card, Header } from './styles';

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: MessageState) => state.isLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Container>
      <Card>
        <Header>
          <Avatar imageUrl="https://pps.whatsapp.net/v/t61.24694-24/222332886_4458061357558087_7010113878345465524_n.jpg?ccb=11-4&oh=acea880b82bb4319a51d47d7c230bfd0&oe=6192BA6E" />
          <h1>Eu, eu mesmo e Irene</h1>
        </Header>
        {isLoading ? <div>Carregando...</div> : <MessageList />}
        <Form />
      </Card>
    </Container>
  );
};

export default Chat;
