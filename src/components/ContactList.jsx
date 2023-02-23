

import React, { Component } from "react";
import { ContactItem } from "./ContactItem";
import styled from 'styled-components';

class ContactList extends Component {

  render() {
    const { filteredContacts, onDeleteBtnClick } = this.props

    return (
      <StyledContactList>
        <ContactItem
          filteredContacts={filteredContacts}
          onDeleteBtnClick={onDeleteBtnClick} />
      </StyledContactList>
    )
  }
}

export { ContactList };

const StyledContactList = styled.ul`
  width: 450px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;

`
