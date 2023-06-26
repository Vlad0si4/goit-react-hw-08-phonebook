// import React from 'react';
import React, { Component } from 'react';

import {
  StyleButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './Phonebook.styled';
import PropTypes from 'prop-types';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.addContact({ name, number });
    this.setState({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Wrapper>
          <h1>Phonebook form</h1>
          <StyledForm onSubmit={this.handleSubmit}>
            <StyledLabel>
              Name
              <StyledInput
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.handleChangeInput}
              />
              Number
              <StyledInput
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={this.handleChangeInput}
              />
              <StyleButton type="submit">Add contact</StyleButton>
            </StyledLabel>
          </StyledForm>
        </Wrapper>
      </>
    );
  }
}

PhonebookForm.propTypes = {
  stats: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
};
