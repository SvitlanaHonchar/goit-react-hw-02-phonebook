import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onAddContact = contact => {
    if (this.state.contacts.some(c => c.name === contact.name)) {
      alert('This contact is already in the Phonebook');
      return false;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
    return true;
  };

  onRemoveContact = contactName => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.name !== contactName
      ),
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Phonebook
          onAddContact={this.onAddContact}
          onRemoveContact={this.onRemoveContact}
        />
        <ContactList
          contacts={this.state.contacts}
          onRemoveContact={this.onRemoveContact}
        />
      </div>
    );
  }
}

export default App;
