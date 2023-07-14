import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 2px solid #ffeb3b;

  height: 60px;
  background-color: #040a08f3;
`;
export const StyledBtn = styled.button`
  height: 30px;
  width: 80px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
  border: 2px solid #ffeb3b;

  &:hover {
    background-color: #d1ff04ae;
  }
`;
export const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: #d1ff04ae;
    border-bottom: 2px solid #ffeb3b;
    transform: scale(1.1);
  }
`;
