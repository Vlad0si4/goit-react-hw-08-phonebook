import { loginThunk } from 'Redux/auth/operation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  LinkStyled,
  StyledBtn,
  StyledForm,
  StyledInput,
  Wrapper,
} from '../register/Register.styled';
import { NavLink } from 'react-router-dom';
const userState = {
  email: '',
  password: '',
};
//bill235689@gmail.com
export const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(userState);
  const { email, password } = login;

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setLogin(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(login));
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInput}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleInput}
        />
        <StyledBtn>Login</StyledBtn>
        <LinkStyled to={'/register'}>Register</LinkStyled>
      </StyledForm>
    </Wrapper>
  );
};
