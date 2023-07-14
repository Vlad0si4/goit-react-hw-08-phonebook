import React, { useState } from 'react';
import {
  LinkStyled,
  StyledBtn,
  StyledForm,
  StyledInput,
  Wrapper,
} from './Register.styled';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'Redux/auth/operation';
import { NavLink } from 'react-router-dom';

const userState = {
  name: '',
  email: '',
  password: '',
};
//bill235689@gmail.com
export const Register = () => {
  const dispatch = useDispatch();
  const [autUser, setAutUser] = useState(userState);
  const { name, email, password } = autUser;

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setAutUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(autUser));
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleInput}
          value={name}
          type="text"
          placeholder="name"
          name="name"
        />
        <StyledInput
          onChange={handleInput}
          value={email}
          type="email"
          placeholder="email"
          name="email"
        />
        <StyledInput
          onChange={handleInput}
          value={password}
          type="password"
          placeholder="password"
          name="password"
        />
        <StyledBtn>Register</StyledBtn>
        <LinkStyled to={'/login'}>Login</LinkStyled>
      </StyledForm>
    </Wrapper>
  );
};
