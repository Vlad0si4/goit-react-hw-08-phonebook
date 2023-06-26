import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filters } from './Filters/Filters';

import PropTypes from 'prop-types';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddItem = ({ name, number }) => {
    const { contacts } = this.state;
    const isExsist = contacts.find(
      word => word.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: crypto.randomUUID(),
          name: name,
          number: number,
        },
      ],
    }));
  };
  handleChangeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getFilterName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterData = this.getFilterName();

    return (
      <>
        <PhonebookForm addContact={this.handleAddItem} />
        <Filters
          contactFilter={this.handleChangeFilter}
          filterValue={filter}
          title={'Find contacts by name or number:'}
        />
        <Contacts
          contacts={filterData}
          title={'Contact:'}
          deleteUser={this.deleteContact}
        />
      </>
    );
  }
}

App.propType = {
  state: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
