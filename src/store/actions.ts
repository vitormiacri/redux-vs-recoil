import { getMessages, addMessage } from '../services/fake-api';
import { IS_LOADING, UPDATE_MESSAGES } from './types';

export const fetchMessages = () => {
  console.log('aqui');
  return async (dispatch: any) => {
    dispatch({ type: IS_LOADING, payload: true });
    const payload = await getMessages();
    dispatch({ type: UPDATE_MESSAGES, payload });
    dispatch({ type: IS_LOADING, payload: false });
  };
};

export const addNewMessage = (message: string) => {
  return async (dispatch: any) => {
    const payload = await addMessage(message);
    dispatch({ type: UPDATE_MESSAGES, payload });
  };
};
