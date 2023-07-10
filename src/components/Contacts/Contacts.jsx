import React from 'react';
import { StyledList, StyledItem, StyledBtn, Wrapper } from './Contacts.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/Redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilters,
  selectLoading,
} from 'components/Redux/selector';
import { useEffect } from 'react';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'components/Redux/operations';

export const Contacts = ({ title }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  const getFilterName = contacts.filter(contact => {
    console.log(contact);
    // return contact.name.toLowerCase().includes(filters?.toLowerCase() || '');
  });
  console.log(getFilterName);
  // const dispatch = useDispatch();

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
  title: PropTypes.string,
};
