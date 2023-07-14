import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 150px;
  border: 2px solid #ffeb3b;
  border-radius: 20px;
  color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  display: inline-block;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 2px solid #ffeb3b;
  margin-top: 30px;
  color: white;
`;

export const StyledBtn = styled.button`
  margin-top: 40px;
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
export const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  &:hover {
    color: #d1ff04ae;
  }
`;
