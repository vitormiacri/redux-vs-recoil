import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './messagesReducer';

export default createStore(reducers, applyMiddleware(thunk));
