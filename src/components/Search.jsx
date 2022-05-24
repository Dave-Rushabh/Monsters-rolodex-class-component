import { Component } from "react";

class Search extends Component {
  render() {
    const { handleSearchChange, placeholder } = this.props;

    return (
      <>
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleSearchChange}
        />
      </>
    );
  }
}

export default Search;
