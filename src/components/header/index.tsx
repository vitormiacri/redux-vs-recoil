import React from 'react';

import Avatar from '../avatar';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar imageUrl="https://cdn.mitvstatic.com/programs/br_eu-eu-mesmo-e-irene-2000_l_m.jpg" />
      <h1>Eu, eu mesmo e Irene</h1>
    </Container>
  );
};

export default Header;
