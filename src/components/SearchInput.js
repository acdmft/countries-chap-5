import React from "react";

class SearchInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="mb-3">
          <label for="countrySearchInput" className="form-label">Country</label>
          <input type="text" class="form-control" id="countrySearchInput"></input>
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    );
  }
}

export default SearchInput;