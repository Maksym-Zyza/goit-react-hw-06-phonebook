import React from 'react';
// import Counter from './components/Counter';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import style from './App.module.css';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // submitHandler = contactObj => {
  //   console.log(contactObj);
  //   if (this.state.contacts.some(({ name }) => name === contactObj.name)) {
  //     return alert(`${contactObj.name} is already in contacts.`);
  //   }
  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, contactObj],
  //     };
  //   });
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsContacts = JSON.parse(contacts);

  //   if (parsContacts) {
  //     this.setState({ contacts: parsContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  return (
    <div className={style.wrapper}>
      {/* <h1 className={style.title}>Counter</h1>
        <Counter /> */}

      <h1 className={style.title}>Phonebook</h1>
      <ContactForm
      // onSubmit={this.submitHandler}
      />

      <h2 className={style.subtitle}>Contacts</h2>
      {contacts.length > 1 && (
        <Filter
        // initialValue={filter}
        // onFilterChange={this.changeFilterHandler}
        />
      )}
      {
        <ContactList
        // contacts={filteredContactList}
        // onDelBtnClick={this.contactDeleteHandler}
        />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
