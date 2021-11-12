import { selector, atom } from 'recoil';

import { getMessages, Message } from '../services/fake-api';

export const fetchMessages = selector({
  key: 'FetchMessages',
  get: async () => await getMessages(),
});

export const messagesAtom = atom<Message[]>({
  key: 'messages',
  default: fetchMessages,
});
