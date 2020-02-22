import React from "react";
import SearchBar from "../SearchInput/searchInput";
import MainLogo from "../Logo/logo";
import UploadButton from "../UploadButton/uploadButton";
import Icon from "../Icon/icon";
import "./styles.scss";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link style={{ textDecoration: 'none' }} to='/'><MainLogo /></Link>
      <SearchBar />
      <div className="header__button">
      <Link  style={{ textDecoration: 'none' }} to='/upload'><UploadButton /></Link>
        <Icon />
      </div>
    </header>
  );
}

export default Header;
