import { Message } from '../services/fake-api';

export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
export const IS_LOADING = 'IS_LOADING';

export type MessageState = {
  messages: Message[];
  isLoading: boolean;
};

export type MessageAction = {
  type: string;
  payload: any;
};

export type DispatchType = (args: MessageAction) => MessageAction;
