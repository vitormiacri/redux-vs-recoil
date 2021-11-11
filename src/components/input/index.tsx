import React, { InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<Props> = ({ handleChange, value }) => {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={handleChange} placeholder="Digite sua mensagem" />
    </InputContainer>
  );
};

export default Input;
