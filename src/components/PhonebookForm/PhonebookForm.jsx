// import React from 'react';
import React, { useState } from 'react';

import {
  StyleButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectContacts } from 'components/Redux/selector';
import { addContact } from 'components/Redux/contactSlice';

const INIT_STATE = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const [contact, setContact] = useState(INIT_STATE);
  const { name, number } = contact;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    setContact(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExsist = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert(`${name} is already in contacts`);
      setContact(INIT_STATE);
      return;
    }

    dispatch(addContact(contact));
    setContact(INIT_STATE);
  };

  return (
    <>
      <Wrapper>
        <h1>Phonebook form</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Name
            <StyledInput
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChangeInput}
            />
            Number
            <StyledInput
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChangeInput}
            />
            <StyleButton type="submit">Add contact</StyleButton>
          </StyledLabel>
        </StyledForm>
      </Wrapper>
    </>
  );
};

PhonebookForm.propTypes = {
  stats: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
};
