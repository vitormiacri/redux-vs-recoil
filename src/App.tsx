import React from 'react';
import { Provider } from 'react-redux';
import Chat from './components/chat';
import store from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Chat />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
