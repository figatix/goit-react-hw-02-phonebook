

import React, { Component } from "react";


class Filter extends Component {

  render() {
    const { filter, onChangeInput } = this.props

    return (

      <label>
        <span>Find contacts by name</span>
        <input
          name="filter"
          value={filter}
          onChange={onChangeInput}
          type="text"
        />
      </label>

    )
  }

}

export { Filter };