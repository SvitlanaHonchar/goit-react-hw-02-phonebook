import Contact from 'components/Contact/Contact';
import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.name}>
                <Contact contact={contact} onRemoveContact={onRemoveContact} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
