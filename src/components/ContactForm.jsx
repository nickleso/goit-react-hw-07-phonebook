import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../redux';
import { nanoid } from 'nanoid';

import css from './App.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contactList } = useSelector(getContacts);

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const normalizedName = name.toLowerCase();
    const number = form.elements.number.value;

    const checkByName = contactList.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(10),
      name,
      number,
    };

    dispatch(addContact(newContact));
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <label className={css.form__label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};
