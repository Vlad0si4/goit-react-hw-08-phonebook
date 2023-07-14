import React from 'react';
import { StyledList, StyledItem, StyledBtn, Wrapper } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilterContact,
  selectLoading,
} from 'Redux/contacts/selector';
import { deleteContactThunk } from 'Redux/contacts/operations';

export const Contacts = ({ title }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const getFilterName = useSelector(selectFilterContact);

  return (
    <>
      <h2>{title}</h2>
      <Wrapper>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <StyledList>
            {getFilterName.map((contact, idx) => {
              return (
                <StyledItem key={contact.id}>
                  {idx + 1 + ') '}
                  {contact.name}: {contact.number}
                  <StyledBtn
                    onClick={() => dispatch(deleteContactThunk(contact.id))}
                  >
                    Delete
                  </StyledBtn>
                </StyledItem>
              );
            })}
          </StyledList>
        )}
        {isError && <h2>Try again...</h2>}
      </Wrapper>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
