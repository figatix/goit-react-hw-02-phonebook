import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";


class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }


  handlerSubmitForm = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    const isExist = contacts.find(person => person.name === name)

    if (isExist) {
      alert(`${name} is already in contacts.`)
      return
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState({
      contacts: [newContact, ...contacts],
      name: "",
      number: "",
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
          handlerSubmitForm={this.handlerSubmitForm}
          onChangeInput={this.onChangeInput}
          personName={this.state.name}
          personNumber={this.state.number}
        />

        <h2>Contact List</h2>
        <Filter
          onChangeInput={this.onChangeInput}
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