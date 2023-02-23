
import React, { Component } from "react";


class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handlerSubmitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addNewContact } = this.props;

    const newContact = {
      name,
      number,
    }

    const isSuccess = addNewContact(newContact)

    if (isSuccess) {
      this.reset()
    }
  }

  reset = () => {
    this.setState({
      name: "",
      number: "",
    })
  }

  render() {
    const { name, number } = this.state

    return (

      <form onSubmit={this.handlerSubmitForm}>
        <label>
          <span>Name of contact</span>
          <input
            name="name"
            type="text"
            onChange={this.onChangeInput}
            value={name}
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
            value={number}
            onChange={this.onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    )
  }

}

export { ContactForm };