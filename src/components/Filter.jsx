

import React, { Component } from "react";


class Filter extends Component {

  render() {
    const { filter, onChangeFilter } = this.props

    return (

      <label>
        <span>Find contacts by name</span>
        <input
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          type="text"
        />
      </label>

    )
  }

}

export { Filter };