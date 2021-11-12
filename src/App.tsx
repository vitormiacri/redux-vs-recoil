import React from 'react';
import { RecoilRoot } from 'recoil';
import Chat from './components/chat';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Chat />
      <GlobalStyle />
    </RecoilRoot>
  );
};

export default App;
