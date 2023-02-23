
import React, { Component } from "react";


class ContactItem extends Component {

  render() {
    const { filteredContacts, onDeleteBtnClick } = this.props

    return (
      <>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDeleteBtnClick(id)} type="button">Delete</button>
            </li>
          )
        })}
      </>


    )
  }

}

export { ContactItem };

