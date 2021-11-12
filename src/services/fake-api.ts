import { v4 as uuid } from 'uuid';

export interface Message {
  id: string;
  name: string;
  message: string;
}

let messages = [
  {
    id: uuid(),
    name: 'Vitor',
    message: 'Testando mensagem 1 bem grande para testar toda a linha de mensagens',
  },
  {
    id: uuid(),
    name: 'Vitor',
    message: 'Testando mensagem 2',
  },
  {
    id: uuid(),
    name: 'Vitor',
    message: 'Testando mensagem 3',
  },
  {
    id: uuid(),
    name: 'Vitor',
    message: 'Testando mensagem 4',
  },
];

export const getMessages = (): Promise<Message[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 1500);
  });
};

export const addMessage = (message: string): Promise<Message[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      messages = [
        ...messages,
        {
          id: uuid(),
          name: 'Vitor',
          message,
        },
      ];
      resolve(messages);
    }, 1500);
  });
};
