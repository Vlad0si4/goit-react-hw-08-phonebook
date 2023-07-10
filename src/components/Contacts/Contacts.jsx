import React from 'react';
import { StyledList, StyledItem, StyledBtn, Wrapper } from './Contacts.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/Redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'components/Redux/selector';

export const Contacts = ({ title }) => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  const getFilterName = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filters?.toLowerCase() || '');
  });

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h2>{title}</h2>
      <StyledList>
        {getFilterName.map((contact, idx) => {
          return (
            <StyledItem key={contact.id}>
              {idx + 1 + ') '}
              {contact.name}: {contact.number}
              <StyledBtn onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </StyledBtn>
            </StyledItem>
          );
        })}
      </StyledList>
    </Wrapper>
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
