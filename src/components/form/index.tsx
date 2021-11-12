import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { messagesAtom } from '../../recoil';
import { addMessage } from '../../services/fake-api';
import Input from '../input';
import { Container } from './styles';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [, setMessages] = useRecoilState(messagesAtom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = async () => {
    setIsLoading(true);
    setInputValue('');
    const response = await addMessage(inputValue);
    setMessages(response);
    setIsLoading(false);
  };

  return (
    <Container>
      <Input value={inputValue} handleChange={handleInputChange} />
      <button type="button" onClick={handleClickButton} disabled={isLoading}>
        Enviar
      </button>
    </Container>
  );
};

export default Form;
