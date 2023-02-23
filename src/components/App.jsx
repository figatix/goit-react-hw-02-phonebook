import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    const { name } = newContact

    const isExist = contacts.find(person => person.name === name)

    if (isExist) {
      alert(`${name} is already in contacts.`)
      return false
    }

    const finallyNewContact = {
      id: nanoid(),
      ...newContact
    }

    this.setState({
      contacts: [finallyNewContact, ...contacts]
    })

    return true
  }

  onChangeFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }


  onDeleteBtnClick = (id) => {
    const newContacts = this.state.contacts.filter(person => person.id !== id)

    this.setState({
      contacts: newContacts,
    })
  }

  handlerFilterContacts = (e) => {
    const { contacts, filter } = this.state
    const normalizeName = filter.toLowerCase()

    return contacts.filter(person => person.name.toLowerCase().includes(normalizeName))
  }

  render() {
    const filteredContacts = this.handlerFilterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={this.addNewContact}
        />

        <h2>Contact List</h2>
        <Filter
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
        />

        <ContactList
          onDeleteBtnClick={this.onDeleteBtnClick}
          filteredContacts={filteredContacts}
        />

      </div>
    )
  }
};

export { App };