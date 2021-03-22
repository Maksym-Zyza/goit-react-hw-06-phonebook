import React from 'react';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import style from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitHandler = contactObj => {
    if (this.state.contacts.some(({ name }) => name === contactObj.name)) {
      return alert(`${contactObj.name} is already in contacts.`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactObj],
      };
    });
  };

  changeFilterHandler = filter => {
    this.setState({ filter });
  };

  contactDeleteHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactListFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);

    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContactList = this.contactListFilter();

    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.submitHandler} />

        <h2 className={style.subtitle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            initialValue={filter}
            onFilterChange={this.changeFilterHandler}
          />
        )}
        {filteredContactList.length > 0 && (
          <ContactList
            contacts={filteredContactList}
            onDelBtnClick={this.contactDeleteHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
