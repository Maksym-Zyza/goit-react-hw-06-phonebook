import React from 'react';
// import Counter from './components/Counter';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import style from './App.module.css';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
  return (
    <div className={style.wrapper}>
      {/* <h1 className={style.title}>Counter</h1>
        <Counter /> */}

      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={style.subtitle}>Contacts</h2>
      {contacts.length > 1 && <Filter />}

      {<ContactList />}
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
