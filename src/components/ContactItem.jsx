import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const ContactItem = ({ personName, personNumber, id, onDeleteBtnClick }) => {

  return (
    <StyledContactItem>
      {personName}: {personNumber}
      <StyledAddBtn onClick={() => onDeleteBtnClick(id)} type="button">Delete</StyledAddBtn>
    </StyledContactItem>
  )

}

export { ContactItem };


ContactItem.propTypes = {
  onDeleteBtnClick: PropTypes.func,
  personName: PropTypes.string.isRequired,
  personNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

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