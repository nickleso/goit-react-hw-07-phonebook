import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from '../redux';
import { Contacts } from './Contacts';
import css from './App.module.css';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(getContacts);
  console.log(contactList);
  const filter = useSelector(getFilter);

  function getFiltredContacts() {
    if (!filter) {
      return contactList;
    }

    const normalizedFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getFiltredContacts();

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <li className={css.contact__item} key={contact.id}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};
