import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-left: auto;
`;

export const UserForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledBtn = styled.button`
  height: 30px;
  width: 80px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-right: 20px;

  border-radius: 10px;
  border: 2px solid #ffeb3b;

  &:hover {
    background-color: #d1ff04ae;
  }
`;

export const TitleStyled = styled.h1`
  margin: 0;

  font-size: 20px;
  font-weight: normal;
`;
