import { v4 as uuid } from 'uuid';

let messages = [
  {
    id: uuid(),
    name: 'Vitor',
    message: 'Testando mensagem 1',
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

export const getMessages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 1500);
  });
};

export const addMessage = (message: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      messages.push({
        id: uuid(),
        name: 'Vitor',
        message,
      });
      resolve(messages);
    }, 1500);
  });
};
