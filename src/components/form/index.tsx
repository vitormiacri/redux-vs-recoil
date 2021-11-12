import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMessage } from '../../store/actions';
import Input from '../input';
import { Container } from './styles';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = async () => {
    setIsLoading(true);
    setInputValue('');
    await dispatch(addNewMessage(inputValue));
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
