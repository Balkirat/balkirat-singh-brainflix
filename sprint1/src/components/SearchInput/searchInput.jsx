import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div >
        <form>
          <input className="header__searchform" type="text" id="filter" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
