

import React, { Component } from "react";
import { ContactItem } from "./ContactItem";


class ContactList extends Component {

  render() {
    const { filteredContacts, onDeleteBtnClick } = this.props

    return (

      <ul>
        <ContactItem
          filteredContacts={filteredContacts}
          onDeleteBtnClick={onDeleteBtnClick} />
      </ul>

    )
  }

}

export { ContactList };

