import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div >
        <form>
          <input className="header__searchform header__searchform--icon" type="text" placeholder="Search" ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
