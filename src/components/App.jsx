import { useEffect, useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filters } from './Filters/Filters';

import PropTypes from 'prop-types';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { load } from 'utils/storage';

export const App = () => {
  const [contacts, setContacts] = useState(() => load('list'));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddItem = ({ name, number }) => {
    const isExsist = contacts.find(
      word => word.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, { id: crypto.randomUUID(), name, number }]);
  };
  const handleChangeFilter = ({ target }) => {
    setFilter(target.value);
  };
  const getFilterName = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterData = getFilterName();

  return (
    <>
      <PhonebookForm addContact={handleAddItem} />
      <Filters
        contactFilter={handleChangeFilter}
        filterValue={filter}
        title={'Find contacts by name or number:'}
      />
      <Contacts
        contacts={filterData}
        title={'Contact:'}
        deleteUser={deleteContact}
      />
    </>
  );
};

App.propType = {
  state: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
