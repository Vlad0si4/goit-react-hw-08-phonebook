// import React from 'react';
import React, { useState } from 'react';

import {
  StyleButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './Phonebook.styled';
import PropTypes from 'prop-types';

export const PhonebookForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact({ name, number });
    resetForm();
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
