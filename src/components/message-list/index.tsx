import React from 'react';
import { Message } from '../../services/fake-api';

import { Container } from './styles';

interface Props {
  list: Message[];
}

const MessageList: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <Container key={item.id}>
          <p>{item.message}</p>
        </Container>
      ))}
    </>
  );
};

export default MessageList;
