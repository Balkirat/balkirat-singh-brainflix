import React, { Component } from "react";
import SearchBar from "../SearchInput/searchInput";
import Logo from "../Icon/icon";
import UploadButton from "../UploadButton/uploadButton";

function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <UploadButton />
    </header>
  );
}

export default Header;
