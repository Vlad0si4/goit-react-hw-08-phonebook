import React from 'react';
import { StyledList, StyledItem, Wraper, StyledBtn } from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, title, deleteUser }) => {
  return (
    <Wraper>
      <h2>{title}</h2>
      <StyledList>
        {contacts.map((contact, idx) => {
          return (
            <StyledItem key={contact.id}>
              {idx + 1 + ') '}
              {contact.name}: {contact.number}
              <StyledBtn onClick={() => deleteUser(contact.id)}>
                Delete
              </StyledBtn>
            </StyledItem>
          );
        })}
      </StyledList>
    </Wraper>
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
  title: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
