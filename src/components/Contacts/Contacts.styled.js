import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 0;
  width: 450px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  border: 2px solid #ffeb3b;
  border-radius: 10px;
  padding: 10px 40px;
  cursor: pointer;

  /* &:hover {
    background-color: #d1ff04ae;
  } */
`;

export const StyledBtn = styled.button`
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: auto;
  border: 2px solid #ffeb3b;
  &:hover {
    background-color: #d1ff04ae;
  }
`;

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
`;
