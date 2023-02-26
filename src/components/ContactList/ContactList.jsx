import Contact from 'components/Contact/Contact';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <div>
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

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
