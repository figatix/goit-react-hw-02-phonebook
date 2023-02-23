import React, { Component } from "react";


class ContactForm extends Component {



  render() {
    const { handlerSubmitForm, onChangeInput, personName, personNumber } = this.props

    return (

      <form onSubmit={handlerSubmitForm}>
        <label>
          <span>Name of contact</span>
          <input
            name="name"
            type="text"
            onChange={onChangeInput}
            value={personName}
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
            value={personNumber}
            onChange={onChangeInput}
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