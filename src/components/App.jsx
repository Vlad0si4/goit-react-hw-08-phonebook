import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { StyledP, StyledTitle } from './Contacts/Contacts.styled';
import { Filters } from './Filters/Filters';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { selectContacts } from '../Redux/selector';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../Redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  console.log(contacts);
  return (
    <>
      <PhonebookForm />
      {contacts.length === 0 ? null : (
        <Filters title={<StyledP>Find contacts by name:</StyledP>} />
      )}
      {contacts.length === 0 ? (
        <StyledTitle>There are no contacts in your phone book.</StyledTitle>
      ) : (
        <Contacts title={<StyledP>Contact:</StyledP>} />
      )}
    </>
  );
};
