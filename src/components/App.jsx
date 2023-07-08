import { Contacts } from './Contacts/Contacts';
import { Filters } from './Filters/Filters';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  return (
    <>
      <PhonebookForm />
      <Filters title={'Find contacts by name:'} />
      <Contacts title={'Contact:'} />
    </>
  );
};
