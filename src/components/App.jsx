import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";

import styled from 'styled-components'


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

    const isExist = contacts.find(person => person.name === name.trim())

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
    const normalizeName = filter.toLowerCase().trim()

    return contacts.filter(person => person.name.toLowerCase().includes(normalizeName))
  }

  render() {
    const filteredContacts = this.handlerFilterContacts();

    return (
      <Wrapper>
        <StyledMainTitle>Phonebook</StyledMainTitle>
        <ContactForm
          addNewContact={this.addNewContact}
        />

        <StyledTitle>Contact List</StyledTitle>
        <Filter
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
        />

        <ContactList
          onDeleteBtnClick={this.onDeleteBtnClick}
          filteredContacts={filteredContacts}
        />

      </Wrapper>
    )
  }
};

export { App };


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 0;
  max-width:700px;
  margin: 0 auto;
`;

const StyledMainTitle = styled.h1`
  font-size: 32px;
  color: #E1341E;
  margin-bottom: 16px;
`;
const StyledTitle = styled.h2`
  font-size: 24px;
  color: #9348B7;
  margin-bottom: 12px;
`;