import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux';
import { addContact } from '../redux/operations';
import css from './App.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const normalizedName = name.toLowerCase();
    const phone = form.elements.phone.value;

    const checkByName = contactList.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      phone,
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
        Phone
        <input
          type="tel"
          name="phone"
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
