import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnWrapper,
  StyledHeader,
  StyledLink,
} from './NavBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLogIn } from 'Redux/auth/selector';

export const NavBar = () => {
  const isLogIn = useSelector(selectLogIn);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        {isLogIn && <StyledLink to="/contact">Contact</StyledLink>}
      </nav>
      {isLogIn && <UserMenu />}
      <div>
        {!isLogIn && (
          <StyledBtnWrapper>
            <StyledBtn onClick={() => navigate('/login')}>Login</StyledBtn>
            <StyledBtn onClick={() => navigate('/register')}>
              Register
            </StyledBtn>
          </StyledBtnWrapper>
        )}
      </div>
    </StyledHeader>
  );
};
