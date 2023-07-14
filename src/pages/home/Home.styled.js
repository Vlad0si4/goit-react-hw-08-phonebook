import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  min-height: calc(100vh - 50px);
`;

export const Title = styled.h1`
  color: white;
  &:hover {
    color: #d1ff04ae;
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
`;
