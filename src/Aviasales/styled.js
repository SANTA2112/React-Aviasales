import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
`;
