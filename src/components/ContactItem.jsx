import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from 'styled-components';

class ContactItem extends Component {

  render() {
    const { filteredContacts, onDeleteBtnClick } = this.props

    return (
      <>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <StyledContactItem key={id}>
              {name}: {number}
              <StyledAddBtn onClick={() => onDeleteBtnClick(id)} type="button">Delete</StyledAddBtn>
            </StyledContactItem>
          )
        })}
      </>
    )
  }
}

export { ContactItem };


ContactItem.propTypes = {
  onDeleteBtnClick: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

const StyledContactItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: #BA1972;

  :nth-child(even){
    color: #2225DD;
  }
`

const StyledAddBtn = styled.button`
  font-size: 16px;
  height: 24px;
  padding: 0 12px;
  margin-left: 12px;
  border-radius: 10px;
  background-color: #9348B7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #E1341E;
  }

`