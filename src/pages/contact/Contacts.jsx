import { selectLogIn } from 'Redux/auth/selector';
import { fetchContactsThunk } from 'Redux/contacts/operations';
import { selectContacts } from 'Redux/contacts/selector';
import { Contacts } from 'components/Contacts/Contacts';
import { StyledP, StyledTitle } from 'components/Contacts/Contacts.styled';
import { Filters } from 'components/Filters/Filters';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLogIn = useSelector(selectLogIn);
  const dispatch = useDispatch();

  useEffect(() => {
    isLogIn && dispatch(fetchContactsThunk());
  }, [dispatch, isLogIn]);

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
