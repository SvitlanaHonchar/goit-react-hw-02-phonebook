import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Phonebook />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
