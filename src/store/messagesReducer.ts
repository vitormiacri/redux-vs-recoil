import { IS_LOADING, MessageAction, MessageState, UPDATE_MESSAGES } from './types';

export const intialState: MessageState = {
  messages: [],
  isLoading: true,
};

const messagesReducer = (
  state: MessageState = intialState,
  action: MessageAction
): MessageState => {
  const { payload } = action;
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case UPDATE_MESSAGES:
      return {
        ...state,
        messages: [...payload],
      };
    default:
      return state;
  }
};

export default messagesReducer;
