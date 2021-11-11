import React, { useState } from 'react';
import Input from '../input';
import { Container } from './styles';

type Props = {
  handleAddMessage(text: string): Promise<void>;
};
const Form: React.FC<Props> = ({ handleAddMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = async () => {
    setIsLoading(true);
    setInputValue('');
    await handleAddMessage(inputValue);
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
