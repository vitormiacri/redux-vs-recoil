import React from 'react';
import Chat from './components/chat';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Chat />
      <GlobalStyle />
    </>
  );
};

export default App;
