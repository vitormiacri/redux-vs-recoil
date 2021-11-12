import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Card = styled.div`
  width: 800px;
  margin: 1rem auto;
  background-color: #fff;
  box-shadow: 0px 2px 4px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #ededed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 4rem;
`;
