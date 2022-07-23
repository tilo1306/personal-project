import styled from 'styled-components';



export const Container = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 20px;
  padding-left: 45px;
  background: ${({ theme }) => theme.color.input};
`;
