import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.name}>
                {contact.name}: {contact.number}
                <button
                  onClick={() => {
                    this.props.onRemoveContact(contact.name);
                  }}
                  type="button"
                >
                  Remove contact
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
