import React from "react";
import SearchBar from "../SearchInput/searchInput";
import MainLogo from "../Logo/logo";
import UploadButton from "../UploadButton/uploadButton";
import Icon from "../Icon/icon";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <MainLogo />
      <SearchBar />
      <div className="header__button">
        <UploadButton />
        <Icon />
      </div>
    </header>
  );
}

export default Header;
