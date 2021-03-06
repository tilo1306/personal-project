import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/logo.svg';
import { ReactComponent as Open } from '../../assets/open.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.secondary};
  @media (max-width: 390px) {
    padding: 0 25px;
  }
`;

export const Div = styled.div`
  display: flex;
  a {
    font-size: 20px;
    margin: 0 10px;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Logo = styled(Logo1)`
  width: 68px;
  height: 48px;
  fill: ${({ theme }) => theme.color.white};
`;

export const Links = styled(Link)`
  width: 80px;
  font-size: 20px;
  text-align: center;
  font-family: ${(props) => props.theme.font.roboto};
  color: ${({ theme }) => theme.color.white};
`;
export const Menu = styled(Open)`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  fill: ${(props) => props.theme.color.white};
`;
