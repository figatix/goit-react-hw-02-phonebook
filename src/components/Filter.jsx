
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from 'styled-components';

class Filter extends Component {

  render() {
    const { filter, onChangeFilter } = this.props

    return (
      <StyledFilterLabel>
        <StyledFilterInputTitle>Find contacts by name</StyledFilterInputTitle>
        <StyledFilterInput
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          type="text"
        />
      </StyledFilterLabel>
    )
  }
}

export { Filter };

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired
}

const StyledFilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  :hover input{
    border: 1px solid #9348B7;
  }
`;
const StyledFilterInputTitle = styled.span`
  font-style: italic;
  font-size: 20px;
  margin-bottom: 8px;
  text-align:center;
  
`;

const StyledFilterInput = styled.input`
  height:32px;
  width:300px;
  padding: 4px 16px;
  font-style: italic;
  font-weight: 700;
  color: #9348B7;
  border: 1px solid #6CB748;
  transition: border 250ms ease-in-out;
`
