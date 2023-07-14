import { logoutThunk } from 'Redux/auth/operation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledBtn, TitleStyled, Wrapper } from './UserMenu.styled';
import { selectUser } from 'Redux/auth/selector';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleStyled>Hello {user.name}!</TitleStyled>
      <StyledBtn onClick={() => dispatch(logoutThunk())}>Logout</StyledBtn>
    </Wrapper>
  );
};
