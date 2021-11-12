import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1 1 auto;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const MessagesContainer = styled.div`
  padding: 0 2rem;
  p {
    margin: 0.5rem 0;
    padding: 0 2rem;
    border: solid 1px #ccc;
    border-radius: 8px;
    background-color: beige;
  }
`;
