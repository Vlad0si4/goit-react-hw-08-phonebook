import React from 'react';
import { LinkStyled, Title, Wrapper } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectLogIn } from 'Redux/auth/selector';

export const Home = () => {
  const isLogIn = useSelector(selectLogIn);
  return (
    <Wrapper>
      {!isLogIn ? (
        <LinkStyled to={'/login'}>
          <Title>
            Hello, you visit Phonebook storage, please login or register for
            using app or click this message
          </Title>
        </LinkStyled>
      ) : (
        <LinkStyled to={'/contact'}>
          <Title>
            You will visit your phone book, click on this message to see your
            contacts
          </Title>
        </LinkStyled>
      )}
    </Wrapper>
  );
};
