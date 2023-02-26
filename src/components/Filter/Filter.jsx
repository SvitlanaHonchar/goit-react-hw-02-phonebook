import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">
          <span>Find contacts by name</span>
          <input
            type="text"
            placeholder="name"
            onChange={this.props.onFilterContacts}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
