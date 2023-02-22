import React, { Component } from "react";
import { nanoid } from "nanoid";

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
    const isExist = this.state.contacts.find(person => person.name === this.state.name)

    if (isExist) {
      alert(`${this.state.name} is already in contacts.`)
      return
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }

    this.setState({
      contacts: [newContact, ...this.state.contacts],
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
    const filteredContacts = this.state.contacts.filter(el => {
      return (el.name === this.state.filter)
    })
  }



  render() {

    console.log(this.state);
    this.handlerFilterContacts();


    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handlerSubmitForm}>
          <label>
            <span>Name of contact</span>
            <input
              name="name"
              type="text"
              onChange={this.onChangeInput}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            <span>Number</span>
            <input
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.onChangeInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contact List</h2>

        <label>
          <span>Find contacts by name</span>
          <input
            name="filter"
            value={this.state.filter}
            onChange={this.onChangeInput}
            type="text"
          />
        </label>

        <ul>
          {this.state.contacts.map(({ name, id, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button onClick={() => this.onDeleteBtnClick(id)} type="button">Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};

export { App };