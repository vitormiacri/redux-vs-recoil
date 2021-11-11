import React from 'react';
import { ContainerImage } from './styles';

interface Props {
  imageUrl: string;
  width?: string;
  height?: string;
}

const Avatar: React.FC<Props> = ({ imageUrl, width, height }) => {
  return (
    <ContainerImage>
      <img src={imageUrl} alt="" />
    </ContainerImage>
  );
};

export default Avatar;
