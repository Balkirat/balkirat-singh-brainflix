import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="searchForm">
        <form>
          <input type="text" id="filter" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
