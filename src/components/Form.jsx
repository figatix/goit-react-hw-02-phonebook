
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

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
      name: name,
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

      <StyledForm onSubmit={this.handlerSubmitForm}>
        <StyledLabel>
          <StyledInputTitle>Name of contact</StyledInputTitle>
          <StyledInput
            name="name"
            type="text"
            onChange={this.onChangeInput}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>

        <StyledLabel>
          <StyledInputTitle>Number</StyledInputTitle>
          <StyledInput
            name="number"
            type="tel"
            value={number}
            onChange={this.onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>

        <StyledAddBtn type="submit">Add contact</StyledAddBtn>
      </StyledForm>
    )
  }

}

export { ContactForm };

ContactForm.propTypes = {
  addNewContact: PropTypes.func,
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width:300px;

  margin-bottom: 32px;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  :hover input{
    border: 2px solid #9348B7;
  }
`;
const StyledInputTitle = styled.span`
  font-size: 20px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  height:32px;
  padding: 4px 16px;
  font-weight: 700;
  color: #9348B7;
  border: 1px solid #6CB748;
  transition: border 250ms ease-in-out;
`
const StyledAddBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: #9348B7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #E1341E;
  }
`