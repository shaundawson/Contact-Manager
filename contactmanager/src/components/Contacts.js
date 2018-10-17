import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '912-322-1875',
        },
        {
          id: 2,
          name: 'Karen Clark',
          email: 'kclark@gmail.com',
          phone: '123-455-5765',
        },
        {
          id: 3,
          name: 'Johnny Ford',
          email: 'cdoe@gmail.com',
          phone: '985-115-2355',
        },
      ],
    };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact =>
      contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };


  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        { contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler= {this.deleteContact.bind(this, contact.id)}
           />
        ))}
      </React.Fragment>
    );
  }
}


export default Contacts;
